import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/app/store.js";
import { ToastProvider } from "./components/common/ToastProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastProvider>
          <CssBaseline />
          <App />
        </ToastProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
