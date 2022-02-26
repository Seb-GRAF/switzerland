import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app/app";
import { HashRouter } from "react-router-dom";
import "locomotive-scroll/src/locomotive-scroll.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter baseName="/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
