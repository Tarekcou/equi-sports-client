import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/one.jpg";
import img2 from "../../assets/two.jpg";
import img3 from "../../assets/three.jpg";
import img4 from "../../assets/four.png";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Swiper/SwiperSlider.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default () => {
  const displayToast = () => {
    toast("CLicked");
  };

  const sliderArray = [
    {
      id: 1,
      img: img4,
      title: "Sports Accessories",
      details:
        "Our expert career counselors will help you develop your skills and knowledge to excel in your field.",
    },
    {
      id: 2,
      img: img2,
      title: "Professional Development",
      details:
        "Our team of experts will help you develop your skills and knowledge to excel in your field.",
    },
    {
      id: 3,
      img: img3,
      title: "Professional Development",
      details:
        "Our team of experts will help you develop your skills and knowledge to excel in your field.",
    },
  ];
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        slidesPerView={"auto"}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{ dynamicBullets: true, clickable: true }}
        className=""
      >
        {sliderArray.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative flex flex-col justify-between items-start gap-5 bg-cover bg-no-repeat min-h-screen text-white"
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          >
            <div className="flex flex-col justify-center items-center gap-16 w-10/12 lg:w-6/12 text-center text-white">
              <h1 className="font-bold text-2xl text-white md:text-6xl">
                {slide.title}
              </h1>
              <p className="text-xs text-yellow-600 lg:text-xl">
                {slide.details}
              </p>
              <Link
                to={"/contact"}
                onClick={displayToast}
                className="w-1/2 btn btn-neutral"
              >
                Join Now
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Swiper>
    </div>
  );
};
