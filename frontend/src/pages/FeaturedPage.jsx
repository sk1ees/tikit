import { Rating } from "@mui/material";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import HotelCards from "../components/HotelCards";
import FeaturedCards from "../components/FeaturedCards";

const FeaturedPage = () => {
  return (
    <div className="fourthSection text-black min-h-screen w-full flex items-center justify-center ">
      <div className="w-3/4 container py-12">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl  font-bold">Featured Places to Stay</h1>
          <small className="text-zinc-500 text-sm">
            Popular places to stay that TikitBook recommends you
          </small>
          <div className="w-full h-24  flex items-center justify-between">
            <div className="flex  w-3/4  gap-5 ">
              <button className="px-5 py-2 bg-black text-white rounded-full">
                New York
              </button>
              <button>Tokyo</button>
              <button>Paris</button>
              <button>London</button>
            </div>
            <div className="px-5 py-2 border-2 text-black rounded-full">
              <button>View All →</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-12 py-5">
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="px-5 py-3 bg-blue-500 text-white rounded-full">
            Show me more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;
