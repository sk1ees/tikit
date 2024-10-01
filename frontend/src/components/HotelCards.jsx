import React from "react";

const HotelCards = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-zinc-100 w-full h-full rounded-lg object-cover">
        <img
          src="https://destinationdeluxe.com/wp-content/uploads/2020/09/Beautiful-Hotels-Designs-Ulaman-Bali-Destination-Deluxe.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="py-2">
        <h1 className="font-medium ">New York</h1>
        <small className="text-zinc-500">18,0000 properties</small>
      </div>
    </div>
  );
};

export default HotelCards;
