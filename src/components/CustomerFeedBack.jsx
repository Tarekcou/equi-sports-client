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
const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "John Doe",
      rating: 5,
      comment:
        "The quality of the basketball was outstanding! Perfect grip and durability.",
      image: "path-to-customer-image1",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment:
        "The badminton racket is lightweight and perfect for beginners. Highly recommend!",
      image: "path-to-customer-image2",
    },
    {
      name: "Michael Johnson",
      rating: 5,
      comment:
        "The running shoes were a great fit and very comfortable during long runs.",
      image: "path-to-customer-image3",
    },
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Pagination]}
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className=""
    >
      <div className="py-20 text-center">
        <h2 className="mb-8 font-bold text-3xl text-center">
          Customer Feedback
        </h2>

        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index} className="px-1">
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="mr-4 rounded-full w-16 h-16 object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{feedback.name}</h3>
                  <div className="flex">
                    {Array.from({ length: feedback.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.179-5.934 5.766 1.4 8.137-7.334-3.857-7.334 3.857 1.4-8.137-5.934-5.766 8.2-1.179z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{feedback.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default CustomerFeedback;
