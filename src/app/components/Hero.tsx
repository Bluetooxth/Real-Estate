"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex justify-center items-center w-full min-h-screen hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-center gap-7 mt-20 mb-20 lg:mt-0 lg:mb-0 lg:container px-7">
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="flex flex-col text-5xl lg:text-6xl font-medium">
            <span className="">{`Let's find a Home`}</span>
            <span className="">{`That's Perfect for you`}</span>
          </h1>
          <p className="text-2xl max-w-[550px]">{`We help you find the perfect home for you. We have the best properties in the city.`}</p>
          <button className="btn text-xl font-medium px-7 py-3 rounded-full">
            Get Started
          </button>
          <div className="flex flex-wrap justify-start items-center gap-5">
            <div className="glass transition duration-300 ease-in-out p-4 cursor-pointer rounded-lg flex flex-col justify-center items-center">
              <span className="text-3xl font-medium">100+</span>
              <span className="text-xl font-medium">Agents</span>
            </div>
            <div className="glass transition duration-300 ease-in-out p-4 cursor-pointer rounded-lg flex flex-col justify-center items-center">
              <span className="text-3xl font-medium">500+</span>
              <span className="text-xl font-medium">Properties</span>
            </div>
            <div className="glass transition duration-300 ease-in-out p-4 cursor-pointer rounded-lg flex flex-col justify-center items-center">
              <span className="text-3xl font-medium">10+</span>
              <span className="text-xl font-medium">Years</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end w-full h-full">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="w-full h-full object-cover heroimg"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;