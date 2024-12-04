import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AllEquipPage from "../pages/AllEquipPage";
import AddEquipPage from "../pages/AddEquipPage";
import MyEquipPage from "../pages/MyEquipPage";
import LogIn from "../pages/LogInPage";
import SignUp from "../pages/SignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import MainLayout from "../layout/MainLayout";
import PrivateRouter from "./PrivateRouter";
import DeatailPage from "../pages/DeatailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: () => fetch("http://localhost:5005/products"),
  },
  {
    path: "/main",
    element: <MainLayout />,

    children: [
      {
        path: "/main/allEquipment",
        element: <AllEquipPage />,
        loader: () => fetch("http://localhost:5005/products"),
      },
      {
        path: "/main/allEquipment/:id",
        element: <DeatailPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5005/products/${params.id}`),
      },
      {
        path: "/main/addEquipment",
        element: (
          <PrivateRouter>
            <AddEquipPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/main/myEquipment",
        element: (
          <PrivateRouter>
            <MyEquipPage />
          </PrivateRouter>
        ),
      },

      {
        path: "/main/auth/login",
        element: <LogIn />,
      },
      {
        path: "/main/auth/signUp",
        element: <SignUp />,
      },
      {
        path: "/main/auth/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);
export default router;
