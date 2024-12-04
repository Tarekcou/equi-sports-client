import ProductCard from "./ProductCard";
import React from "react";
import "swiper/css";

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
const products = [
  {
    id: 1,
    name: "Nivia High Grip Spotvolly Volleyball",
    price: 36.0,
    originalPrice: 42.0,
    discount: 14,
    rating: 4,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Running Sports Light Weight Walking Shoes",
    price: 35.0,
    originalPrice: null,
    discount: null,
    rating: 0,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Senston N80 Badminton Racket Carbon Fiber",
    price: 69.0,
    originalPrice: null,
    discount: null,
    rating: 4,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Spider Professional Protein Shaker Bottle",
    price: 55.0,
    originalPrice: null,
    discount: null,
    rating: 5,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 5,
    name: "Heavy Duty Polyester Basketball Stand With Net",
    price: 9.0,
    originalPrice: 12.0,
    discount: 25,
    rating: 5,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const FeatureProducts = () => (
  <div className="p-8">
    <h2 className="mb-6 font-bold text-2xl text-center">Feature Products</h2>
    <p className="mb-10 text-center text-gray-500">
      There are many variations of passages of lorem ipsum available
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
    >
      {products.map((product) => (
        <SwiperSlide
          key={product.id}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-1 max-w-7xl"
        >
          <ProductCard key={product.id} product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default FeatureProducts;
