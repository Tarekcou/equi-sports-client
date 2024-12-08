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
import ContactPage from "../pages/ContactPage";
import CheckoutPage from "../pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: () => fetch("https://equi-sports-server-iota.vercel.app/products"),
  },
  {
    path: "/main",
    element: <MainLayout />,

    children: [
      {
        path: "/main/allEquipment",
        element: <AllEquipPage />,
        loader: () =>
          fetch("https://equi-sports-server-iota.vercel.app/products"),
      },
      {
        path: "/main/AllFeatureProducts",
        element: <AllFeatureProducts />,
        loader: () =>
          fetch("https://equi-sports-server-iota.vercel.app/products"),
      },
      {
        path: "/main/productDetails/:id",
        element: (
          <PrivateRouter>
            <ProductDetailsPage />
          </PrivateRouter>
        ),
        loader: ({ params }) => {
          // console.log(params.id);
          return fetch(
            `https://equi-sports-server-iota.vercel.app/products/${params.id}`
          );
        },
      },
      {
        path: "/main/category/:categoryName",
        element: <CategoryWiseProducts />,
        loader: ({ params }) => {
          const categoryName = params.categoryName;
          console.log(categoryName);

          const link = `https://equi-sports-server-iota.vercel.app/category/${categoryName}`;
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
        path: "/main/checkOut",
        element: (
          <PrivateRouter>
            <CheckoutPage />
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
              `https://equi-sports-server-iota.vercel.app/products/${params.id}`
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
            `https://equi-sports-server-iota.vercel.app/myEquipment/${params.email}`
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
      {
        path: "/main/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <h1 className="my-20 text-3xl text-center">Page Not Found</h1>,
  },
]);
export default router;
