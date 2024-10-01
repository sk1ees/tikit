import { Rating } from "@mui/material";
import React from "react";

const FeaturedCards = () => {
  return (
    <div className="flex flex-col text-black">
    

      <div className="bg-zinc-100 w-50 h-50 rounded-lg object-cover">
        <img
          src="https://destinationdeluxe.com/wp-content/uploads/2020/09/Beautiful-Hotels-Designs-Ulaman-Bali-Destination-Deluxe.jpg"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="py-2">
        <small className="text-zinc-500">Entire Cabin - 10 beds</small>
        <h1 className="font-medium text-black">Ship and Castel Hotels</h1>
        <small className="text-zinc-500">32054 | Sherman Park</small> <br />
        <small className="text-zinc-900 font-bold flex gap-2 items-center ">
          $25/night{" "}
          <div className="flex items-center">
            {" "}
            <Rating name="read-only" value="4" readOnly /> (48)
          </div>
        </small>
      </div>
    </div>
  );
};

export default FeaturedCards;
