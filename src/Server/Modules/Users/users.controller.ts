import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import BaseController from "../BaseController";
import { ApiAuth } from "../../Middlewares";
import UsersService from "./users.service";
import { MeResponseDto } from "@shared/ApiDto/users.dto";

@Service()
class UsersController extends BaseController {
  @Inject()
  private readonly _usersService: UsersService;

  public constructor() {
    super();
    this._initRoutes();
  }

  protected _initRoutes = () => {
    this.router.get("/me", ApiAuth(true), this.getMe);
  }

  public getMe = async (req: Request, res: Response<MeResponseDto>) => {
    const user = await this._usersService.findUser({ field: "id", value: req.session.userid });
    res.json(user);
  }
}

export default UsersController;
