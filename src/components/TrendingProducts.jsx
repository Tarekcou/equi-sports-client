import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
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

const TrendingProducts = ({ products }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth); // Update the width state on window resize
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const renderContent = () => {
    if (windowWidth < 768) {
      return 2; // For small screens
    } else if (windowWidth < 1024) {
      return 3; // For medium screens (tablets)
    } else {
      return 4; // For large screens (desktops)
    }
  };
  console.log(windowWidth, renderContent());

  return (
    <div className="shadow-md mx-auto mt-5 py-8">
      <div className="flex justify-center items-center gap-3">
        <FaMoneyBillTrendUp className="text-5xl text-green-500" />
        <h2 className="font-bold text-center text-xl md:text-3xl">
          Top Trending Products
        </h2>
      </div>

      {products.length === 0 ? (
        <h1 className="mt-10 text-center text-xl">
          {" "}
          ❌ No trending products available right now!!!
        </h1>
      ) : (
        <>
          <p className="m-4 text-center text-gray-500">
            There are many variations of trending products available
          </p>

          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination]}
            navigation
            centeredSlides={false}
            loop={true}
            slidesPerView={renderContent()}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            // pagination={{ clickable: true }}
            className="lg:w-11/12"
          >
            {products.map((product) => (
              <SwiperSlide key={product._id} className="m-2">
                <ProductCard key={product._id} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default TrendingProducts;
