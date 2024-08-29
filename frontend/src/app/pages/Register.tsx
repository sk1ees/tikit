import React from "react";
import Image from "next/image";
import { FaApple, FaGoogle } from "react-icons/fa";
import "./Register.css";

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" flex flex-col gap-10 items-center justify-center ">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl ">Get Started Now</h1>
            <p>Enter your credentials to access your account</p>
            <div className="flex gap-3 mt-6">
              <button className=" px-4 py-2 rounded-md flex items-center gap-3 font-semibold bg-[#18191e] ">
                <FaGoogle /> Log In with Google
              </button>
              <button className=" px-4 py-2 rounded-md flex items-center gap-3 font-semibold bg-[#18191e]">
                <FaApple /> Log In with Apple
              </button>
            </div>
          </div>
          <hr className="hr-text" data-content="or" />
          <form
            action=""
            className="flex flex-col gap-3 w-full text-sm text-gray-200"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="bg-transparent border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="bg-transparent border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-transparent border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="bg-transparent border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
              />
            </div>
            <div className="flex gap-2 py-2 text-sm">
              <input type="checkbox" name="terms" id="terms" />
              <p>
                I agree to the{" "}
                <a href="" className="text-blue-500">
                  Terms & Privacy
                </a>
              </p>
            </div>
            <button className="block w-full bg-orange-500 py-3 rounded-lg text-white text-md font-semibold">
              Register
            </button>
          </form>
          <p>
            Have an account? <a href="">Sign In</a>
          </p>
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5ca58229e666692e392ddaec/1555113951110-FOLZY25KT7ZY922AKT19/sunset-tower-pool-portrait-home.jpg?format=500w"
          alt=""
          className=" rounded-3xl h-[95%] w-[95%]"
        />
      </div>
    </div>
  );
};

export default Login;
