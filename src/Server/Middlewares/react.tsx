import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../../Common/App";

export const react = () => {
  return ReactDOMServer.renderToString(
    <StaticRouter>
      <App />
    </StaticRouter>);
};
