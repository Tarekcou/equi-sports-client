import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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
import { NavLink } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="relative shadow-md border rounded-lg min-w-44 md:min-w-64 text-center group">
      {product?.discountPercentage && (
        <div className="top-2 left-2 absolute bg-red-500 px-2 py-1 rounded font-bold text-white text-xs">
          -{product.discountPercentage}%
        </div>
      )}

      <div className="flex justify-center items-center">
        <NavLink
          className={
            "btn btn-warning group-hover:visible bottom-0 top-1/2 left-1/2 absolute opacity-0 group-hover:opacity-100 transform transition-all -translate-x-1/2 translate-y-10 group-hover:translate-y-0 duration-300 invisible ease-in-out  "
          }
          to={`/main/productDetails/${product._id}`}
        >
          View Details
        </NavLink>
      </div>

      <div className="border w-full h-44">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="p-2 font-semibold text-lg">{product.itemName}</h3>
      <div className="flex justify-center items-center">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className={`text-yellow-400 ${
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
      </div>
      <div className="my-2">
        {product?.discountedPrice ? (
          <>
            <span className={`mr-2 text-gray-500 line-through`}>
              ${parseInt(product.originalPrice).toFixed(2)}
            </span>
            <span className="font-bold text-green-500">
              ${product.discountedPrice}
            </span>
          </>
        ) : (
          <span className={`mr-2 text-gray-500`}>
            ${parseInt(product.originalPrice).toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
