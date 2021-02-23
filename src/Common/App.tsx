import React from "react";
import { hot } from "react-hot-loader";
import { useSelector } from "react-redux";
import isNode from "detect-node";
import { init } from "../Client/localization";
import { FrontRoutes } from "./Routes";
import { AppState } from "./Redux/store";
import { Language } from "./Interfaces/Language.interface";
import "../Client/Styles/global.scss";

const App = ({ langs, server }: { langs: Language, server: boolean }) => {
  const pathname = useSelector((state: AppState) => state.router.location.pathname);
  const lang = pathname.split("/")[1];
  (isNode ? global : window)._lang = lang;
  init(langs, server);

  return (
    <div className="App">
      <FrontRoutes />
    </div>
  );
};

export default hot(module)(App);
