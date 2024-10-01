import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-20  border-b-[1px] border-black">
      <div className=" w-3/4 h-full flex  m-auto">
        <div className=" w-full h-full flex gap-14 items-center px-5">
          <div className="">
            <h1 className="text-2xl">TikitBook</h1>
          </div>
          <div className="list-none flex gap-4 ">
            <li>Home</li>
            <li>Blogs</li>
            <li>Travellers</li>
            <li>Contacts</li>
          </div>
        </div>
        <div className=" w-1/2 h-full flex gap-5 justify-end px-5 items-center">
          <div className=""></div>
          <div className=""></div>
          <div className="">
            <i class="fa-regular fa-bell text-xl"></i>
          </div>
          <div className="">
            <img
              src="https://i.pinimg.com/564x/f4/5a/bb/f45abbae0c400c4e6c5a175ed3052668.jpg"
              alt=""
              className="w-12 h-12  rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
