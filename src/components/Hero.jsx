import React from "react";
import { background, hero } from "../assets";

export default function Hero() {
  return (
    <div className="relative z-[-1] flex h-[85vh] w-full items-end justify-center bg-black ">
      <img
        src={background}
        alt=""
        className="absolute size-full object-cover object-bottom blur-xl"
      />
      <div className="fixed flex h-[85vh] w-full max-w-[1680px] flex-col items-center px-4  lg:flex-row lg:justify-center">
        <div className="z-[1] flex h-1/2 max-w-[600px] flex-col justify-center pt-20 text-6xl font-semibold text-[#EDE9A3] lg:h-full lg:max-w-full lg:text-8xl">
          <p className="">Hello,</p>
          <span className="py-1 pb-4 lg:pb-8">
            I'm <span className="text-[#9bfb93]">Clyde Francis</span>
          </span>
          <span className="text-lg">Web Developer / Graphic Designer</span>
        </div>

        <div className="flex h-1/2 w-full justify-center lg:h-full lg:w-5/12 lg:items-end ">
          <img
            src={hero}
            alt="hero image"
            className=" size-full object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
