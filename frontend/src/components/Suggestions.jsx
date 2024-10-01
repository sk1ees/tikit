import React from "react";
import HotelCards from "./HotelCards";

const Suggestions = () => {
  return (
    <div className="secondSection h-[60vh]  flex items-center justify-center">
      <div className="w-3/4 h-[90%] m-auto flex flex-col gap-5 px-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl  font-bold">Suggestions for Discovery</h1>
          <small className="text-zinc-500">
            Popular places for recommend for you
          </small>
        </div>
        <div className="grid grid-cols-5 gap-5 w-full h-3/4 ">
          <HotelCards />
          <HotelCards />
          <HotelCards />
          <HotelCards />
          <HotelCards />
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
