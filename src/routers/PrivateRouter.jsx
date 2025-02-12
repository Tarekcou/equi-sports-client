import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRouter = ({ children }) => {
  const { user, isLoading, setLoading } = useContext(AuthContext);
  // const key=import.meta.env.VITE_apiKey
  // console.log(key)

  const location = useLocation();
  // console.log(location);
  if (isLoading) return <Loading />;
  if (user && user.email) return children;

  return (
    <Navigate state={location.pathname} to={"/main/auth/login"}></Navigate>
  );
};

export default PrivateRouter;
