import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import AppAPI from "./APIs/AppAPI";
import AppForm from "./APIs/AppForm";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppAPI />
    <AppForm />
    {/* <App /> */}
  </StrictMode>,
  rootElement
);
