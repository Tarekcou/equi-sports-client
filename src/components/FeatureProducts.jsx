import ProductCard from "./ProductCard";
import React from "react";
import "swiper/css";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../components/Swiper/SwiperSlider.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

const FeatureProducts = ({ products }) => (
  <div className="mx-auto w-11/12">
    <div className="flex justify-center items-center gap-3 my-5">
      <MdOutlineFeaturedPlayList className="text-5xl text-green-500" />
      <h2 className="font-bold text-center text-xl md:text-3xl">
        Feature Products
      </h2>
    </div>
    {products.length === 0 ? (
      <h1 className="text-center text-xl">
        {" "}
        ❌ No Product Availabe right now!!!
      </h1>
    ) : (
      <>
        <p className="m-5 text-center text-gray-500">
          There are many variations of Product available in our store
        </p>
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto px-1">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center items-center my-10">
          <NavLink
            className={"btn btn-success"}
            to={"/main/allfeatureproducts"}
          >
            View All Products
          </NavLink>
        </div>
      </>
    )}
  </div>
);

export default FeatureProducts;
