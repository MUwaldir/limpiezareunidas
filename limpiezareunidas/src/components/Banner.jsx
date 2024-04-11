import React from "react";
import logo from "../utils/banner.jpg";
import logobanner from "../utils/logo.png";

const Banner = () => {
  return (
    <div
      className="relative h-screen"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="absolute  right-10 top-20">
        <img src={logobanner} className="h-40" alt="" />
        <p className="mt-20 text-2xl font-semibold text-white  h-12 flex justify-end ">
          <a className="items-end bg-blue-950 rounded-3xl px-4 py-1 " href="#quienessomos">¿Quiénes Somos?</a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
