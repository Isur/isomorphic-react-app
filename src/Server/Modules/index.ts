import Container from "typedi";

import * as AuthModule from "./Auth";
import * as UsersModule from "./Users";
import * as SessionModule from "./Sessions";
import * as SettingsModule from "./Settings";

import BaseController from "./BaseController";

export const Controllers: BaseController[] = [
  Container.get(AuthModule.AuthController),
  Container.get(UsersModule.UsersController),
  Container.get(SettingsModule.SettingsController),
];

export {
  AuthModule, UsersModule, SessionModule, SettingsModule,
};
