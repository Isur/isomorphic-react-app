import { Service } from "typedi";
import { TIME } from "../Constants";
import { Apps, Cookies, Environment, EnvironmentType } from "./config.interface";

@Service()
class Config {
  environment: Environment;
  cookies: Cookies;
  apps: Apps;

  constructor() {
    this.loadFromEnv();
    this.config();
  }

  private loadFromEnv() {
    this.environment = {
      env: process.env.NODE_ENV as EnvironmentType || "development",
      port: process.env.PORT || "3000",
      secret: process.env.SECRET || "Some default secret that should be changed.",
    };
    this.apps = {

    };
  }

  private config = () => {
    this.cookies = {
      expiration: "10h",
      httpOnly: true,
      maxAge: TIME.HOUR * 10,
    };
  }
}

export default Config;
