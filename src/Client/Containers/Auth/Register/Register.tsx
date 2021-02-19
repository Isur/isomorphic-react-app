import { push } from "connected-react-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Button, Input, Form } from "../../../Components";
import { AuthService } from "../../../Services";
import { RegisterForm, validationSchemas } from "./RegisterForm";
import "../Auth.scss";

const RegisterContainer = () => {
  const dispatcher = useDispatch();
  const { t } = useTranslation(["registerPage", "common"]);

  const handleSubmit = async (data: RegisterForm) => {
    await AuthService.register(data);
  };

  const handleLogin = () => {
    dispatcher(push(`/${_lang}/login`));
  };

  return (
    <div className="Auth">
      <h1> {t("register")} </h1>
      <Form<RegisterForm> onSubmit={handleSubmit} validation={validationSchemas()} translation="registerPage">
        <Input name="email" type="email" />
        <Input name="username" />
        <Input name="password" type="password" />
        <Input name="confirmPassword" type="password" />
        <Button content="Register" type="submit" />
        <Button content="Login" onClick={handleLogin} />
      </Form>
    </div>
  );
};

export default RegisterContainer;
