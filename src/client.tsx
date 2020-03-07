import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory, History } from "history";
import { Provider } from "react-redux";
import { Store } from "./Common/Redux/store";
import App from "./Common/App";

const history: History = createBrowserHistory();

const initData = document.getElementById("initData").textContent;
const parsedData = JSON.parse(initData);

ReactDOM.hydrate(
  <Provider store={Store(history, parsedData)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("react-app"),
);
