import { push } from "connected-react-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "../../../Components";
import { login as Login } from "../../../../Common/Redux/Auth";
import { AppState } from "../../../../Common/Redux/store";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const userid = useSelector((state: AppState) => state.auth.userid);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { t } = useTranslation(["loginPage", "common"]);

  useEffect(() => {
    if(userid) {
      dispatch(push(`/${_lang}/`));
    }
  }, [userid]);

  const handleLogin = async () => {
    dispatch(Login(login, password));
  };

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    dispatch(push(`/${_lang}/register`));
  };

  return (
    <div>
      <h1> {t("login")} - {t("common:help")} </h1>
      <Input name="login" value={login} onChange={handleChangeLogin} label="Email" placeholder="Enter your email" />
      <Input name="password" value={password} onChange={handleChangePassword} type="password" label="Password" placeholder="Enter your password" />
      <Button onClick={handleLogin} content="Login" />
      <Button onClick={handleRegister} content="Register" />
    </div>
  );
};

export default LoginContainer;
