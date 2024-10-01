import React from "react";

const NearbyCards = () => {
  return (
    <div className="flex gap-5 w-full h-32 rounded-xl  border-2 items-center px-5">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtedB2ZEU0Y7eIha2GvEoOTuNLx2e1r3dQg&s"
        alt=""
        className="w-24 h-24 rounded-full object-cover"
      />

      <div className="text-black">
        <h1 className="font-semibold">New York</h1>
        <small className="text-zinc-500">46hrs drive</small>
      </div>
    </div>
  );
};

export default NearbyCards;
