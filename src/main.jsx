import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StoreContextProvider from "./context/context.jsx";
import { BrowserRouter } from "react-router-dom";
import Popup from "./Components/PopUp/PopUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>
        <App />
        <Popup />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
