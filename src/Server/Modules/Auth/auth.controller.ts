import { Request, Response } from "express";
import { body } from "express-validator";
import BaseController, { Routable } from "../BaseController";
import { AppConfig, Config } from "../../Config";
import { ApiValidator, ApiAuth } from "../../Middlewares";
import Auth from "./auth.service";
import { AuthService } from "./auth.service.interface";

class AuthController extends BaseController implements Routable {
  constructor(
    private readonly _authService: AuthService,
    private readonly _config: Config) {
    super();
    this._initRoutes();
  }

  _initRoutes = (): void => {
    this.router.post("/login", ApiValidator.execute([
      body("username").isString()
        .notEmpty(),
      body("password").isString()
        .notEmpty(),
    ]), this.login);
    this.router.post("/register", ApiValidator.execute([
      body("email").isEmail()
        .notEmpty(),
      body("password").isString()
        .isStrongPassword(),
      body("confirmPassword").isString()
        .isStrongPassword(),
      body("username").isString()
        .notEmpty(),
    ]), this.register);
    this.router.post("/logout", ApiAuth.execute, this.logout);
  }

  login = async (req: Request, res: Response) => {
    const loginData = await this._authService.login(req.body.username, req.body.password);
    res.header({ "auth-token": loginData.token });
    res.cookie("jwt", loginData.token, this._config.cookies);
    res.json({ userId: loginData.userId, access_token: loginData.token });
  }

  register = async (req: Request, res: Response) => {
    const { email, password, confirmPassword, username } = req.body;
    const userId = await this._authService.register({ email, password, confirmPassword, username });
    res.json(userId);
  }

  logout = async (req: Request, res: Response) => {
    await this._authService.logout(req.session.id);
    res.status(200).json("Logged out");
  }
}

export default new AuthController(
  Auth,
  AppConfig,
);
