import React from "react";
import ReactDOM from "react-dom/client";
//import {BrowserRouter} from "react-router-dom";
import App4 from "./app4";
import BmiCalculation from "./components/bmi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App4 />
    </BrowserRouter>
  </React.StrictMode>
);
