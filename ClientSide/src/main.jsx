import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingContext from "./context/LoadingContext.jsx";
import CartContext from "./context/CartContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <LoadingContext>
        <AuthProvider>
          <CartContext>
            <App />
          </CartContext>
        </AuthProvider>
      </LoadingContext>
    </StrictMode>
  </BrowserRouter>
);
