import React, { useEffect, useState } from "react";
import "swiper/css";
import { TbChartBarPopular } from "react-icons/tb";

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
import { NavLink, useLoaderData } from "react-router-dom";
const PopularCategories = () => {
  const products = useLoaderData();
  // console.log(products);
  const categories = [
    {
      id: 1,
      image: "https://www.rockstaracademy.com/lib/images/news/basketball.jpeg", // Replace with actual image URLs
      title: "BasketBall Training",
      category: "BusketBall",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.jpg?s=612x612&w=0&k=20&c=DcorerbBUeDNTfld3OclgHxCty4jih2yDCzipffX6zw=", // Replace with actual image URLs
      title: "Cricket Ball Playing",
      category: "Cricket",
    },
    {
      id: 3,
      image:
        "https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju", // Replace with actual image URLs
      title: "FootBall Training",
      category: "Football",
    },
    {
      id: 4,
      image:
        "https://www.racquetpoint.com/cdn/shop/articles/what-is-badminton-racquet-point.jpg?v=1732071171", // Replace with actual image URLs
      title: "Batminton Classic",
      category: "Batminton",
    },
    {
      id: 5,
      image:
        "https://cdn.britannica.com/95/190895-050-955A908C/volleyball-match-Italy-Russia-Milan-Volleyball-World.jpg", // Replace with actual image URLs
      title: "VolleyBall Classic",
      category: "VolleyBall",
    },
  ];

  // Count products in each category
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.categoryName.toLowerCase()] =
      (acc[product.categoryName.toLowerCase()] || 0) + 1;
    return acc;
  }, {});

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth); // Update the width state on window resize
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //
  const renderContent = () => {
    if (windowWidth < 768) {
      return 2; // For small screens
    } else if (windowWidth < 1024) {
      return 3; // For medium screens (tablets)
    } else {
      return 4; // For large screens (desktops)
    }
  };

  return (
    <>
      <div className="pt-10">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center gap-4">
            <TbChartBarPopular className="text-5xl text-green-500" />

            <h2 className="font-bold text-xl md:text-3xl">
              Popular Categories
            </h2>
          </div>

          <p className="m-2 text-gray-600 text-xl">
            There are many variations of categories available
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
        slidesPerView={renderContent()}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {categories.map((cate, index) => (
          <SwiperSlide key={cate.id} className="px-1 max-w-10/12">
            {/* <h1>{cate.category}</h1> */}
            <NavLink
              to={`/main/category/${cate.category}`}
              className="relative shadow-lg rounded-lg overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={cate.image}
                alt={cate.title}
                className="group-hover:scale-105 w-full h-60 transition-transform duration-300 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-50 group-hover:bg-opacity-75 p-4 text-white transition-opacity duration-300">
                {/* Title */}
                <h3 className="font-bold text-lg">{cate.title}</h3>
                {/* Items */}
                <p className="text-sm">
                  {categoryCounts[cate.category.toLowerCase()]
                    ? categoryCounts[cate.category.toLowerCase()]
                    : 0}{" "}
                  Product
                </p>
                {/* Optional Read More */}

                <button className="mt-2 px-4 py-2 rounded-md font-bold text-end text-white transition btn btn-outline btn-sm">
                  Read More
                </button>
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PopularCategories;
