import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context"
import { CategoryProvider } from "./context/category.context";
import { CartItemProvider } from "./context/cartItem.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <CategoryProvider>
        <CartItemProvider>
          <App />
        </CartItemProvider>
      </CategoryProvider>

      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
