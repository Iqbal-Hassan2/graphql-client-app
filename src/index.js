import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// react toast style third party
import "react-toastify/dist/ReactToastify.css";

// all style
import "./assets/scss/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<App />);
