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
import AllFeatureProducts from "../pages/AllFeatureProducts";
import CategoryWiseProducts from "../pages/CategoryWiseProducts";
import ProductDetailsPage from "../pages/ProductDetailsPage";

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
        path: "/main/AllFeatureProducts",
        element: <AllFeatureProducts />,
        loader: () => fetch("http://localhost:5005/products"),
      },
      {
        path: "/main/productDetails/:id",
        element: <ProductDetailsPage />,
        loader: ({ params }) => {
          console.log(params.id);
          return fetch(`http://localhost:5005/products/${params.id}`);
        },
      },
      {
        path: "/main/category/:categoryName",
        element: <CategoryWiseProducts />,
        loader: ({ params }) => {
          const categoryName = params.categoryName;
          console.log(categoryName);

          const link = `http://localhost:5005/category/${categoryName}`;
          console.log(link);
          return fetch(link);
        },
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
        path: "/main/addEquipment/:id",
        element: (
          <PrivateRouter>
            <AddEquipPage />
          </PrivateRouter>
        ),
        loader: async ({ params }) => {
          // console.log(params.id);
          if (params?.id) {
            const res = await fetch(
              `http://localhost:5005/products/${params.id}`
            );
            const data = await res.json();
            console.log(data);
            return data;
          }
        },
      },
      {
        path: "/main/myEquipment/:email",
        element: (
          <PrivateRouter>
            <MyEquipPage />
          </PrivateRouter>
        ),
        loader: async ({ params }) => {
          console.log(params.email);
          const res = await fetch(
            `http://localhost:5005/myEquipment/${params.email}`
          );
          const data = await res.json();
          console.log(data);
          return data;
        },
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
