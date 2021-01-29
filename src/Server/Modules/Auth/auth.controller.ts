import { Request, Response } from "express";
import { body } from "express-validator";
import { Inject, Service } from "typedi";
import BaseController from "../BaseController";
import { Config } from "../../Config";
import { ApiValidator, ApiAuth } from "../../Middlewares";
import { LoginRequestDto, LoginResponseDto, LogoutResponseDto, RegisterRequestDto, RegisterResponseDto } from "../../../Common/ApiDto/auth.dto";
import AuthService from "./auth.service";

@Service()
class AuthController extends BaseController {
  @Inject()
  private readonly _config: Config

  @Inject()
  private readonly _authService: AuthService;

  constructor() {
    super();
    this._initRoutes();
  }

  protected _initRoutes = (): void => {
    this.router.post("/login", ApiValidator([
      body("login").isString()
        .notEmpty(),
      body("password").isString()
        .notEmpty(),
    ]), this.login);
    this.router.post("/register", ApiValidator([
      body("email").isEmail()
        .notEmpty(),
      body("password").isString()
        .isLength({ min: 8 }),
      body("confirmPassword").isString(),
      body("username").isString()
        .notEmpty(),
    ]), this.register);
    this.router.post("/logout", ApiAuth(true), this.logout);
  }

  public login = async (req: Request<{}, {}, LoginRequestDto>, res: Response<LoginResponseDto>) => {
    const loginData = await this._authService.login(req.body.login, req.body.password);
    res.header({ "auth-token": loginData.token });
    res.cookie("jwt", loginData.token, this._config.cookies);
    res.json({ userId: loginData.userId, access_token: loginData.token });
  }

  public register = async (req: Request<{}, {}, RegisterRequestDto>, res: Response<RegisterResponseDto>) => {
    const { email, password, confirmPassword, username } = req.body;
    const userId = await this._authService.register({ email, password, confirmPassword, username });
    res.json(userId);
  }

  public logout = async (req: Request<{}, {}, {}>, res: Response<LogoutResponseDto>) => {
    await this._authService.logout(req.session.id);
    res.status(200).json("Logged out");
  }
}

export default AuthController;
