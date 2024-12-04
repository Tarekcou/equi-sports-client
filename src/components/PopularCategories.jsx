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
const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      image: "https://www.rockstaracademy.com/lib/images/news/basketball.jpeg", // Replace with actual image URLs
      title: "BasketBall Training",
      items: "6 Items",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=", // Replace with actual image URLs
      title: "Cricket Ball Playing",
      items: "6 Items",
    },
    {
      id: 3,
      image:
        "https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju", // Replace with actual image URLs
      title: "FootBall Training",
      items: "8 Items",
    },
    {
      id: 4,
      image:
        "https://www.racquetpoint.com/cdn/shop/articles/what-is-badminton-racquet-point.jpg?v=1732071171", // Replace with actual image URLs
      title: "Batminton Classic",
      items: "READ MORE",
    },
    {
      id: 5,
      image:
        "https://cdn.britannica.com/95/190895-050-955A908C/volleyball-match-Italy-Russia-Milan-Volleyball-World.jpg", // Replace with actual image URLs
      title: "VolleyBall Classic",
      items: "READ MORE",
    },
  ];

  return (
    <>
      <div className="bg-white py-12">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <h2 className="font-bold text-2xl md:text-3xl">Popular Categories</h2>
          <p className="mt-2 text-gray-600">
            There are many variations of passages of Lorem Ipsum available
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        centeredSlides={false}
        loop={true}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className=""
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={category.id}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-1 max-w-7xl"
          >
            <div className="relative shadow-lg rounded-lg overflow-hidden group">
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.title}
                className="group-hover:scale-105 w-full h-60 transition-transform duration-300 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-50 group-hover:bg-opacity-75 p-4 text-white transition-opacity duration-300">
                {/* Title */}
                <h3 className="font-bold text-lg">{category.title}</h3>
                {/* Items */}
                <p className="text-sm">{category.items}</p>
                {/* Optional Read More */}
                {category.items === "READ MORE" && (
                  <button className="bg-yellow-500 hover:bg-yellow-600 mt-2 px-4 py-2 rounded-md font-bold text-black transition">
                    Read More
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PopularCategories;
