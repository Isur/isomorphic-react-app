import React from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import Example from "../Client/Components/Example/Example";

// Pages
import ErrorPage from "../Client/Pages/ErrorPage";
import HomePage from "../Client/Pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/example" exact component={Example} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default hot(module)(App);
