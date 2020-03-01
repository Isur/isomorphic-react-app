import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../../Common/App";

export const react = () => {
  return ReactDOMServer.renderToString(<App />);
};
