import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/context/user.context";
import { ProductProvider } from "./components/context/product.context";
import { CartItemProvider } from "./components/context/cartItem.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <UserProvider> */}
      <ProductProvider>
        <CartItemProvider>
          <App />
        </CartItemProvider>
      </ProductProvider>

      {/* </UserProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
