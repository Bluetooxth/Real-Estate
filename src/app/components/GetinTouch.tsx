"use client";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="flex justify-start items-start w-full ">
      <div className="lg:container flex flex-col justify-start items-start gap-5 w-full">
        <p className="text-xl font-normal self-start w-full">
          {`Whether you’re buying, selling, or renting, we’re here to help. Reach
          out to us, and we'll respond as soon as possible.`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-start items-center w-full">
          <div className="flex flex-col justify-center items-center text-2xl gap-2 px-5 py-3 rounded-lg cursor-pointer text-center card">
            <FaMapMarkerAlt className="text-3xl" />
            <p>{`1234 Real Estate St, City, Country`}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl gap-2 px-5 py-3 rounded-lg cursor-pointer text-center card">
            <FaEnvelope className="text-3xl" />
            <p>{`info@realestate.com`}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl gap-2 px-5 py-3 rounded-lg cursor-pointer text-center card">
            <FaPhoneAlt className="text-3xl" />
            <p>{`0123456789`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;