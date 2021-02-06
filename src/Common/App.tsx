import React from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import { useSelector } from "react-redux";
import isNode from "detect-node";
import { PrivateRoute, AuthRoute } from "../Client/Components/Routes";
import Homepage from "../Client/Pages/Homepage";
import ErrorPage from "../Client/Pages/Error";
import LoginPage from "../Client/Pages/Auth/LoginPage";
import RegisterPage from "../Client/Pages/Auth/RegisterPage";
import { AppState } from "./Redux/store";
import "../Client/Styles/global.scss";

const App = () => {
  const pathname = useSelector((state: AppState) => state.router.location.pathname);
  const lang = pathname.split("/")[1];
  (isNode ? global : window)._lang = lang;

  return (
    <div className="App">
      <>
        <Switch>
          <PrivateRoute path={`/${lang}/`} exact component={Homepage} />
          <AuthRoute path={`/${lang}/login`} exact component={LoginPage} />
          <AuthRoute path={`/${lang}/register`} exact component={RegisterPage} />
          <PrivateRoute path={`/${lang}/private`} exact component={Homepage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </>
    </div>
  );
};

export default hot(module)(App);
