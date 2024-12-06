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
// const products = [
//   {
//     id: 1,
//     name: "Nivia High Grip Spotvolly Volleyball",
//     price: 36.0,
//     originalPrice: 42.0,
//     discount: 14,
//     rating: 4,
//     image: "https://via.placeholder.com/150", // Replace with actual image URL
//   },
//   {
//     id: 2,
//     name: "Running Sports Light Weight Walking Shoes",
//     price: 35.0,
//     originalPrice: null,
//     discount: null,
//     rating: 0,
//     image: "https://via.placeholder.com/150", // Replace with actual image URL
//   },
//   {
//     id: 3,
//     name: "Senston N80 Badminton Racket Carbon Fiber",
//     price: 69.0,
//     originalPrice: null,
//     discount: null,
//     rating: 4,
//     image: "https://via.placeholder.com/150", // Replace with actual image URL
//   },
//   {
//     id: 4,
//     name: "Spider Professional Protein Shaker Bottle",
//     price: 55.0,
//     originalPrice: null,
//     discount: null,
//     rating: 5,
//     image: "https://via.placeholder.com/150", // Replace with actual image URL
//   },
//   {
//     id: 5,
//     name: "Heavy Duty Polyester Basketball Stand With Net",
//     price: 9.0,
//     originalPrice: 12.0,
//     discount: 25,
//     rating: 5,
//     image: "https://via.placeholder.com/150", // Replace with actual image URL
//   },
// ];

const FeatureProducts = ({ products }) => (
  <div className="mx-auto w-11/12">
    <div className="flex justify-center items-center gap-3 my-5">
      <MdOutlineFeaturedPlayList className="text-5xl text-green-500" />
      <h2 className="font-bold text-3xl text-center">Feature Products</h2>
    </div>
    {products.length === 0 ? (
      <h1 className="text-center text-xl">
        {" "}
        ❌ No Product Availabe right now!!!
      </h1>
    ) : (
      <>
        <p className="mb-10 text-center text-gray-500">
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
