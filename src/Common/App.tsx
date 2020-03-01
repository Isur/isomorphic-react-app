import React from "react";
import { hot } from "react-hot-loader";
import Example from "../Client/Components/Example/Example";

const App = () => {
  return (
    <div className="App">
      <Example />
    </div>
  );
};

export default hot(module)(App);
