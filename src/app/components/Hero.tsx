"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex justify-center items-center w-full min-h-screen hero"
      style={{
        backgroundImage: 'url("/images/hero1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-5 lg:container px-7">
        <h1 className="flex flex-col text-5xl lg:text-7xl font-medium">
          <span className="">Start Your Journey</span>
          <span className="">To the Perfect Home</span>
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
    </section>
  );
};

export default Hero;