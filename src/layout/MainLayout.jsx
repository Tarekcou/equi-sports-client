import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NewsletterSubscription from "../components/NewsletterSubscription";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <NewsletterSubscription />

      <Footer />
    </div>
  );
};

export default MainLayout;
