import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import NewsletterSubscription from "../components/NewsletterSubscription";
import { Helmet } from "react-helmet";

const MainLayout = ({ children }) => {
  const location = useLocation();
  // console.log(location, location.pathname.split("/")[2]);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <NewsletterSubscription />

      <Footer />
      <Helmet>
        <title>
          {(location, location.pathname.split("/")[2]).toUpperCase()}
        </title>
      </Helmet>
    </div>
  );
};

export default MainLayout;
