import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "./Utils/Database";
import { Service } from "typedi";
import { Config } from "./Config";
import { ApiAuth, ApiError, ReactMiddleware, RouterCache } from "./Middlewares";
import Api from "./Api";

@Service()
class App {
  express: Express;
  constructor(
    private readonly config: Config,
    private readonly api: Api,
  ) {
    this.express = express();
    this.initMiddlewares();
    this.initRoutes();
  }

  private initMiddlewares() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cookieParser());
    this.express.use("/public", express.static("public"));
    if(this.config.environment.env === "development") {
      this.express.use(RouterCache.mount());
    } else {
      this.express.use("/client.js", express.static("client.js"));
      this.express.use("/style.css", express.static("style.css"));
    }
  }

  private initRoutes() {
    this.express.use("/api", this.api.router);
    this.express.use(ApiError);
    this.express.get("*", ApiAuth(false), (req, res) => {
      res.send(ReactMiddleware.getHtml(req));
    });
  }
}

export default App;
