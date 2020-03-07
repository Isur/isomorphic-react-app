import React from "react";
import { Request } from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import serializeJavascript from "serialize-javascript";
import App from "../../Common/App";
import html from "../View/html";
import { Store } from "../../Common/Redux/store";

export const react = (req: Request) => {
  const context = {};
  const initData = {
    settings: {
      app: "Isomorphic React App",
      theme: "light",
    },
  };
  const history = createMemoryHistory({
    initialEntries: [req.originalUrl],
  });
  const store = Store(history, initData);
  const front = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>);

  return html(front, serializeJavascript(initData));
};
