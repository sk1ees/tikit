import React from "react";

const NewsletterSection = () => {
  return (
    <div className="thirdSection w-full h-[70vh] ">
      <div className="w-3/4 h-full m-auto grid grid-cols-2 container ">
        <div className=" p-20">
          <div className="flex gap-5 flex-col ">
            <h1 className="text-3xl font-semibold">Join our newsletter 🎉</h1>
            <small className="text-[15px]">
              Read and share your perspective of about any topic. <br />
              Everyone's welcome
            </small>

            <h1 className="flex gap-2 items-center">
              <div className="w-5 h-5 bg-zinc-300 border border-white rounded-full"></div>
              Get more discount
            </h1>
            <h1 className="flex gap-2 items-center">
              <div className="w-5 h-5 bg-zinc-300 border  rounded-full"></div>
              Get premium magazines
            </h1>

            <div className="py-5 relative">
              <input
                type="text"
                className=" w-full pe-20 py-4 border px-4 bg-white rounded-full text-sm outline-none "
              />
              <div className="w-10 h-10 absolute top-[26px] right-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="https://www.tutorialspoint.com/images/trending_categories.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
