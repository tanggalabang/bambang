import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
window.Popper = require("popper.js").default;
window.$ = window.jQuery = require("jquery");
require("bootstrap");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
