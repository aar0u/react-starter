import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import 'semantic-ui-css/semantic.min.css'
import App from "./App.js";

window.env = {
  API: "http://localhost:8080"
}

ReactDOM.render(<App />, document.getElementById("root"));
