import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// all style
import "./assets/scss/app.scss";

// custom style
// import "./assets/scss/custom.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
