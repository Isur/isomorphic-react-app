import { Request, Response } from "express";
import BaseController from "../BaseController";
import { ApiAuth } from "../../Middlewares";
import { UsersService } from "./users.service.interface";
import Users from "./users.service";

class UsersController extends BaseController {
  constructor(
    private readonly _usersService: UsersService,
  ) {
    super();
    this._initRoutes();
  }

  _initRoutes = () => {
    this.router.get("/me", ApiAuth.execute, this.getMe);
  }

  getMe = async (req: Request, res: Response) => {
    const user = await this._usersService.findUser({ field: "id", value: req.session.userid });
    res.json(user);
  }
}

export default new UsersController(
  Users,
);
