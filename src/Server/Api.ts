import { Router } from "express";
import PromiseRouter from "express-promise-router";
import { ApiBadEndpoint, ApiLogger } from "./Middlewares";
import { ExampleModule, AuthModule, UsersModule } from "./Modules";

class Api {
  router: Router;

  constructor() {
    this.router = PromiseRouter();
    this.initRoutes();
  }

  initRoutes = () => {
    this.router.use(ApiLogger.execute);
    this.router.use("/example", ExampleModule.ExampleController.router);
    this.router.use("/auth", AuthModule.AuthController.router);
    this.router.use("/users", UsersModule.UsersController.router);
    this.router.use(ApiBadEndpoint.execute);
  }
}

export default new Api();
