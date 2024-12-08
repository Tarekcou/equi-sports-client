import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
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
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../provider/AuthProvider";
const ProductDetailsPage = () => {
  const [products, setProducts] = useState([]);
  const product = useLoaderData();
  const { isLoading, setLoading } = useContext(AuthContext);
  // console.log(product);
  useEffect(() => {
    // setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    // setLoading(true);
    fetch("https://equi-sports-server-iota.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(products);
        // setLoading(false);
      });
  }, []);
  const {
    name,
    email,
    itemName,
    categoryName,
    description,
    originalPrice,
    discountedPrice,
    discountPercentage,
    rating,
    customization,
    processingTime,
    stockStatus,
    stockItem,
    imageUrl,
  } = product;

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
      {isLoading ? (
        ""
      ) : (
        <div className="bg-gray-100 p-1 md:p-6 min-h-screen">
          <div className="bg-white shadow-lg mx-auto rounded-lg max-w-5xl overflow-hidden">
            <div className="flex flex-wrap justify-center items-center">
              {/* Left Section: Image */}
              <div className="p-4 w-full md:w-1/2">
                <img
                  src={imageUrl} // Replace with your image URL
                  alt="Product"
                  className="rounded-lg w-full h-auto"
                />
              </div>

              {/* Right Section: Details */}
              <div className="p-6 w-full md:w-1/2">
                <h2 className="mb-4 font-bold text-2xl text-gray-800">
                  {itemName}
                </h2>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl text-yellow-500">★★★★☆</span>
                  <span className="text-gray-600">
                    (26 people are viewing this now)
                  </span>
                </div>
                <p className="mb-6 text-gray-600">{description}</p>

                {/* Pricing Section */}
                <div className="mb-4">
                  <span className="mr-2 font-bold text-lg text-red-500">
                    {discountedPrice}
                  </span>
                  <span className="text-gray-500 line-through">
                    {originalPrice}
                  </span>
                  <span className="ml-2 text-green-600">
                    -{discountPercentage}%
                  </span>
                </div>

                {/* Countdown */}
                <div className="mb-6">
                  <p className="mb-2 font-bold text-gray-700">
                    Hurry Up! Deals End In:
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="font-bold text-lg">802</p>
                      <span className="text-gray-600 text-sm">Days</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg">03</p>
                      <span className="text-gray-600 text-sm">Hours</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg">55</p>
                      <span className="text-gray-600 text-sm">Minutes</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg">53</p>
                      <span className="text-gray-600 text-sm">Seconds</span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Section */}
                <div className="flex items-center space-x-4 mb-6">
                  <NavLink
                    to={"/main/addToCart"}
                    className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-bold text-white"
                  >
                    Add to Cart
                  </NavLink>
                  <NavLink className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-bold text-white">
                    Buy It Now
                  </NavLink>
                </div>

                {/* Additional Info */}
                <div className="font-medium text-base text-gray-500">
                  <p>Availability:{stockStatus}</p>
                  <p className="text-green-600">{stockItem} in stock</p>
                  <p>Delivery Time: {processingTime} Days</p>
                  <p>Customization Option: {customization}</p>
                  <p>Tags: Accessories, Cotton, Fashion, Summer, Vintage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* You may alsoi like */}
      <div className="p-2 lg:p-8">
        <h2 className="mb-6 font-bold text-2xl text-center">
          You May Also Like
        </h2>
        <p className="mb-10 text-center text-gray-500">
          There are many other variations available
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
      </div>
    </>
  );
};

export default ProductDetailsPage;
