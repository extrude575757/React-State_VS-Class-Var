import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import BrokenVariableCounter from "./BrokenVariableCounter";
import FunctionalCounter from "./FunctionalCounter";
import StateCounter from "./StateCounter";
import VariableCounter from "./VariableCounter";

function App() {
  return (
    <div className="App">
      <h1>State vs. Class Variables</h1>
      <div className="CounterContainer">
        <StateCounter />
        <VariableCounter />
      </div>
      <hr />
      <div className="CounterContainer">
        <FunctionalCounter />
        <BrokenVariableCounter />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
