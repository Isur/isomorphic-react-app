import React from "react";
import { push } from "connected-react-router";
import { useTranslation } from "react-i18next";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "../../../Components";
import { login as Login } from "../../../../Common/Redux/Auth";
import { AppState } from "../../../../Common/Redux/store";

interface LoginForm {
  login: string,
  password: string,
}

const LoginContainer = () => {
  const dispatch = useDispatch();
  const authError = useSelector((state: AppState) => state.auth.error);
  const formMethods = useForm<LoginForm>();
  const { handleSubmit } = formMethods;
  const { t } = useTranslation(["loginPage", "common"]);

  const validationScheme = {
    required: t("common:fieldRequired"),
  };

  const handleLogin = async (data: LoginForm) => {
    dispatch(Login(data.login, data.password));
  };

  const handleRegister = () => {
    dispatch(push(`/${_lang}/register`));
  };

  return (
    <div>
      <h1> {t("login")} - {t("common:help")} </h1>
      <FormProvider {...formMethods}>
        <Input name="login" label="Email" placeholder="Enter your email" validation={validationScheme} />
        <Input name="password" type="password" label="Password" placeholder="Enter your password" validation={validationScheme} />
        <p> {authError && t("loginFailed")} </p>
        <Button onClick={handleSubmit(handleLogin)} content="Login" />
        <Button onClick={handleRegister} content="Register" />
      </FormProvider>
    </div>
  );
};

export default LoginContainer;
