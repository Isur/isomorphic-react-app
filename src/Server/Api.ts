import { Router } from "express";
import PromiseRouter from "express-promise-router";
import Container, { Service } from "typedi";
import { ApiBadEndpoint, ApiLogger } from "./Middlewares";
import { AuthModule, SettingsModule, UsersModule } from "./Modules";
import { API } from "@shared/Constants";

@Service()
class Api {
  public router: Router;

  public constructor() {
    this.router = PromiseRouter();
    this._initRoutes();
  }

  private _initRoutes = () => {
    this.router.use(ApiLogger);
    this.router.use(`/${API.AUTH}`, Container.get(AuthModule.AuthController).router);
    this.router.use(`/${API.USERS}`, Container.get(UsersModule.UsersController).router);
    this.router.use(`/${API.SETTINGS}`, Container.get(SettingsModule.SettingsController).router);
    this.router.use(ApiBadEndpoint);
  }
}

export default Api;
