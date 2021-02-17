import React from "react";
import { push } from "connected-react-router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { login as Login } from "../../../../Common/Redux/Auth";
import { AppState } from "../../../../Common/Redux/store";
import { Button, Input, Form } from "../../../Components";
import { LoginForm, validationSchemas } from "./LoginForm";
import "../Auth.scss";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const authError = useSelector((state: AppState) => state.auth.error);
  const { t } = useTranslation(["loginPage", "common"]);

  const handleLogin = async (data: LoginForm) => {
    dispatch(Login(data.login, data.password));
  };

  const handleRegister = () => {
    dispatch(push(`/${_lang}/register`));
  };

  return (
    <div className="Auth">
      <h1> {t("login")} - {t("common:help")} </h1>
      <Form<LoginForm> onSubmit={handleLogin} validation={validationSchemas()} translation="loginPage">
        <Input name="login" />
        <Input name="password" type="password" />
        <p> {authError && t("loginFailed")} </p>
        <Button type="submit" content="Login" />
        <Button onClick={handleRegister} content="Register" />
      </Form>
    </div>
  );
};

export default LoginContainer;
