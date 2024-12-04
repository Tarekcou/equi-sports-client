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
const ProductCard = ({ product }) => {
  return (
    <div className="relative shadow-md p-4 border rounded-lg min-w-64">
      {product?.discount && (
        <div className="top-2 left-2 absolute bg-red-500 px-2 py-1 rounded font-bold text-white text-xs">
          -{product.discount}%
        </div>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain"
      />
      <h3 className="mt-4 font-semibold text-lg">{product.itemName}</h3>
      <div className="flex items-center mt-2">
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
      <div className="mt-2">
        {product?.originalPrice && (
          <span className="mr-2 text-gray-500 line-through">
            ${parseInt(product.originalPrice).toFixed(2)}
          </span>
        )}
        <span className="font-bold text-green-500">
          ${parseInt(product?.price).toFixed(2)}
        </span>
      </div>
    </div>
  );
};
export default ProductCard;
