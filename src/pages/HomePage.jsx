import React, { useContext, useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import PopularCategories from "../components/PopularCategories";
import TrendingProducts from "../components/TrendingProducts";
import FeatureProducts from "../components/FeatureProducts";
import NewsletterSubscription from "../components/NewsletterSubscription";
import CustomerFeedback from "../components/CustomerFeedBack";
import { useLoaderData } from "react-router-dom";
import Storm from "../components/Storm";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const HomePage = () => {
  const products = useLoaderData();
  // console.log(products);
  const { isLoading, setLoading } = useContext(AuthContext);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true);
  //   }, 1000);
  //   setLoading(false);
  // }, []);
  return (
    <div className="relative">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="z-10 absolute w-full">
            <Navbar />
          </div>
          <Hero />
          <div className="min-h-screen">
            <PopularCategories />
            <TrendingProducts products={products} />
            <Features />
            <Storm />
            <FeatureProducts products={products} />
            <CustomerFeedback />
            <NewsletterSubscription />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
