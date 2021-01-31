import { Router } from "express";
import PromiseRouter from "express-promise-router";
import Container, { Service } from "typedi";
import { ApiBadEndpoint, ApiLogger } from "./Middlewares";
import { AuthModule, SettingsModule, UsersModule } from "./Modules";

@Service()
class Api {
  public router: Router;

  public constructor() {
    this.router = PromiseRouter();
    this._initRoutes();
  }

  private _initRoutes = () => {
    this.router.use(ApiLogger);
    this.router.use("/auth", Container.get(AuthModule.AuthController).router);
    this.router.use("/users", Container.get(UsersModule.UsersController).router);
    this.router.use("/settings", Container.get(SettingsModule.SettingsController).router);
    this.router.use(ApiBadEndpoint);
  }
}

export default Api;
