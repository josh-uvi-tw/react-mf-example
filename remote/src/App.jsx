import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./header";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: remote</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
