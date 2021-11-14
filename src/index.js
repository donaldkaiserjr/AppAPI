import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import AppAPI from "./APIs/AppAPI";
import AppForm from "./APIs/AppForm";
import AppForm2 from "./APIs/AppForm2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppForm2 />
    <AppAPI />
    <AppForm />
    {/* <App /> */}
  </StrictMode>,
  rootElement
);
