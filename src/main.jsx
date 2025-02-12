import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./routers/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster
      position="top-right"
      gutter={8}
      toastOptions={{ duration: 3000 }}
    />
  </StrictMode>
);
