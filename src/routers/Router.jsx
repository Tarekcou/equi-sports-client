import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../layout/HomeLayout";
import AllEquipPage from "../pages/AllEquipPage";
import AddEquipPage from "../pages/AddEquipPage";
import MyEquipPage from "../pages/MyEquipPage";
import LogIn from "../pages/LogInPage";
import SignUp from "../pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/allEquipment",
    element: <AllEquipPage />,
  },
  {
    path: "/addEquipment",
    element: <AddEquipPage />,
  },
  {
    path: "/myEquipment",
    element: <MyEquipPage />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
export default router;