import React from "react";
import Navbar from "../components/Navbar";
import "../../public/stylesheets/HomePage.css";
import HotelCards from "../components/HotelCards";
import FeaturedPage from "./FeaturedPage";
import NewsletterSection from "../components/NewsletterSection";
import Suggestions from "../components/Suggestions";
import HeroSection from "../components/HeroSection";
import NearbySection from "../components/NearbySection";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen w-full gradientColor">
        <Navbar />
        <HeroSection />
        <Suggestions />

        <FeaturedPage />
        <NearbySection />
        <NewsletterSection />
        <div className="h-[60vh] bg-white border-t-2">
          <footer className="w-3/4 m-auto h-full grid grid-cols-5 items-center   list-none">
            <div className="  flex flex-col gap-2 items-center">
              <li className="font-semibold">lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </div>
            <div className="text-left flex flex-col gap-2 items-center">
              <li className="font-semibold">Resource</li>

              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </div>
            <div className="text-left flex flex-col gap-2 items-center">
              <li className="font-semibold">Resource</li>

              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </div>
            <div className="text-left flex flex-col gap-2 items-center">
              <li className="font-semibold">Resource</li>

              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </div>
            <div className="text-left flex flex-col gap-2 items-center">
              <li className="font-semibold">Community</li>

              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
