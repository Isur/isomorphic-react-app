
import React from "react";
import { Inject, Service } from "typedi";
import { Request } from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import serializeJavascript from "serialize-javascript";
import App from "../../Common/App";
import html from "../View/html";
import { AppState, Store } from "../../Common/Redux/store";
import LanguageHelper from "../Utils/Language";

@Service()
class ReactMiddleware {
  @Inject()
  private readonly _langs: LanguageHelper;

  public getHtml = (req: Request): string => {
    const context = {};
    const language = this._langs.getLanguage(req.lang);
    const initData: Partial<AppState> = {
      settings: {
        app: "Isomorphic React App",
        theme: "light",
        serverVersion: "1",
      },
      auth: {
        userid: req.session.userid,
        error: null,
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
      </Provider>,
    );

    return html(front, serializeJavascript(initData), serializeJavascript(language));
  }
}

export default ReactMiddleware;
