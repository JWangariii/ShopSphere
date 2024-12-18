import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import CartProvider from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/global.css";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
