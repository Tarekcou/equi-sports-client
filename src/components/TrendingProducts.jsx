import ProductCard from "./ProductCard";
import React from "react";
import "swiper/css";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

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

const TrendingProducts = ({ products }) => (
  <div className="shadow-md mx-auto mt-5 p-8">
    <div className="flex justify-center items-center gap-3">
      <FaMoneyBillTrendUp className="text-5xl text-green-500" />
      <h2 className="font-bold text-3xl text-center">Top Trending Products</h2>
    </div>

    {products.length === 0 ? (
      <h1 className="mt-10 text-center text-xl">
        {" "}
        ❌ No trending products available right now!!!
      </h1>
    ) : (
      <>
        <p className="my-5 text-center text-gray-500">
          There are many variations of trending products available
        </p>

        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          centeredSlides={false}
          loop={true}
          slidesPerView={4}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // pagination={{ clickable: true }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product._id}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-1 max-w-7xl"
            >
              <ProductCard key={product._id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )}
  </div>
);

export default TrendingProducts;
