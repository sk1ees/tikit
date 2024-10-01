import React from "react";

const HeroSection = () => {
  return (
    <div className="firstSection w-full min-h-screen relative">
      <div className="w-1/2 h-20 bg-zinc-50 border-white border-2 m-auto rounded-full absolute top-[70%] left-1/4 shadow grid grid-cols-4 p-3">
        <div className="  h-full "></div>
        <div className=" h-full"></div>
        <div className=" h-full"></div>
        <div className=" h-full flex justify-end items-center">
          <div className="w-12 h-12 rounded-full bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
