import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StateContext from "./Context/StateContext";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
);
