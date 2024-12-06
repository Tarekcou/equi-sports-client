import React from "react";
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

const HomePage = () => {
  const products = useLoaderData();
  // console.log(products);
  return (
    <div className="relative">
      <div className="z-10 absolute w-full">
        <Navbar />
      </div>
      <Hero />
      <div className="min-h-screen">
        <PopularCategories />
        <TrendingProducts products={products} />
        <Features />

        <FeatureProducts products={products} />
        <CustomerFeedback />
        <NewsletterSubscription />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
