import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Common/App";

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById("react-app"),
);
