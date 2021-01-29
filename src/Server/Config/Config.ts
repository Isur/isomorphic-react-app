import { Service } from "typedi";
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
      env: process.env.NODE_ENV as EnvironmentType,
      port: process.env.PORT,
      secret: process.env.SECRET,
    };
    this.apps = {

    };
  }

  private config = () => {
    const HOUR = 1000 * 60 * 60; // TODO: to constants

    this.cookies = {
      expiration: "10h",
      httpOnly: true,
      maxAge: HOUR * 10,
    };
  }
}

export default Config;
