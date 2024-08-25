"use client";
import React from "react";

const Achievements = () => {
  return (
    <section className="flex justify-start items-start w-full ">
      <div className="lg:container flex flex-col justify-start items-start gap-5 w-full">
        <p className="text-xl font-normal self-start w-full">
          {`Our achievements speak for themselves. Here's a snapshot of what we've accomplished over the years.`}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-start items-center w-full">
          <div className="flex flex-col justify-center items-center text-2xl gap-2 px-5 py-3 rounded-lg card">
            <p className="text-3xl font-medium">{`100+`}</p>
            <p className="text-2xl">{`Agents`}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl gap-2 px-5 py-3 rounded-lg card">
            <p className="text-3xl font-medium">{`500+`}</p>
            <p className="text-2xl">{`Properties`}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl gap-2 px-5 py-3 rounded-lg card">
            <p className="text-3xl font-medium">{`10+`}</p>
            <p className="text-2xl">{`Years`}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl gap-2 px-5 py-3 rounded-lg card">
            <p className="text-3xl font-medium">{`99%`}</p>
            <p className="text-2xl">{`Quality Score`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;