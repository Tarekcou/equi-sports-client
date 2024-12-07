import React from "react";
import "swiper/css";
import { VscFeedback } from "react-icons/vsc";

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
      image:
        "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment:
        "The badminton racket is lightweight and perfect for beginners. Highly recommend!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ot7fjk2Zlzx4r_0smMzzSJs6RTlzvp5NOA&s",
    },
    {
      name: "Michael Johnson",
      rating: 5,
      comment:
        "The running shoes were a great fit and very comfortable during long runs.",
      image:
        "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
    },
  ];

  return (
    <div className="shadow-md mx-auto my-10 py-10 border w-11/12">
      <div className="flex justify-center items-center gap-2">
        <VscFeedback className="text-5xl text-green-500" />
        <h2 className="font-bold text-3xl text-center">Customer Feedback</h2>
      </div>

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
        <div className="text-center">
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
    </div>
  );
};

export default CustomerFeedback;
