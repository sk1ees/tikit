import React from "react";
import Navbar from "../components/Navbar";
import "../../public/stylesheets/HomePage.css";
import HotelCards from "../components/HotelCards";
const HomePage = () => {
  return (
    <>
      <div className="min-h-screen w-full gradientColor">
        <Navbar />
        <div className="firstSection w-full min-h-screen relative">
          <div className="w-1/2 h-20 bg-zinc-50 border-white border-2 m-auto rounded-full fixed top-3/4 left-1/4 shadow grid grid-cols-4 p-3">
            <div className="  h-full "></div>
            <div className=" h-full"></div>
            <div className=" h-full"></div>
            <div className=" h-full flex justify-end items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>
        <div className="secondSection h-[60vh]  flex items-center justify-center">
          <div className="w-3/4 h-3/4 m-auto flex flex-col gap-5 px-5">
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
        <div className="thirdSection min-h-screen bg-slate-600"></div>
        <div className="fourthSection min-h-screen bg-black"></div>
        <div className="fifthSection  h-[60vh] bg-slate-600"></div>
        <div className="sixthSection "></div>
        <div className="sevenSection "></div>
        <div className="eightSection "></div>
        <div className="ninthSection "></div>
        <div className="tenthSection "></div>
        <div className="eleventhSection "></div>
        <footer></footer>
      </div>
    </>
  );
};

export default HomePage;
