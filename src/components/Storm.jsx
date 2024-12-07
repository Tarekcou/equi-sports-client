import React from "react";
import { NavLink } from "react-router-dom";

const Storm = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.shutterstock.com/image-photo/high-angle-view-different-sports-260nw-1575444292.jpg")`,
      }}
      className="brightness-80 bg-cover bg-no-repeat w-full h-36 md:h-72"
    >
      <div className="flex flex-col justify-center items-start gap-1 md:gap-4 mx-auto w-10/12 h-full text-white">
        <p className="">Reduce impact shock by up to 80% off</p>
        <h1 className="font-bold text-2xl md:text-4xl">
          Storm Moulded Football
        </h1>
        <div className="flex justify-center items-center">
          <NavLink
            className={"btn btn-warning btn-sm md:btn-md "}
            to={`/main/AllFeatureProducts`}
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Storm;
