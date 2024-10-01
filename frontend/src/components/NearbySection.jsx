import React from "react";
import NearbyCards from "./NearbyCards";

const NearbySection = () => {
  return (
    <div className="fifthSection  h-[80vh] w-3/4 m-auto ">
      <div className="container flex flex-col gap-5 ">
        <div className="w-full h-32  text-center flex flex-col items-center justify-center">
          <h1 className="text-3xl">Explore Nearby</h1>
          <h1 className="text-zinc-500">
            Discover great places near where you live
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-5 px-4 ">
          <NearbyCards />
          <NearbyCards />
          <NearbyCards />
          <NearbyCards />
          <NearbyCards />
          <NearbyCards />
          <NearbyCards />
          <NearbyCards />
        </div>
      </div>
    </div>
  );
};

export default NearbySection;
