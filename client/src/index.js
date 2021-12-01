import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/productContext";

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root")
);
