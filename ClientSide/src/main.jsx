import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingContext from "./context/LoadingContext.jsx";
import CartContext from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <LoadingContext>
        <CartContext>
          <App />
        </CartContext>
      </LoadingContext>
    </StrictMode>
  </BrowserRouter>
);
