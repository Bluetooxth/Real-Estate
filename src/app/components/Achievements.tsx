"use client";
import React from "react";

const Achievements = () => {
  return (
    <section className="flex justify-start items-start w-full">
      <div className="lg:container flex flex-col justify-start items-start gap-5 w-full">
        <p className="text-xl font-normal self-start w-full">
          {`Our achievements speak for themselves. Here's a snapshot of what we've accomplished over the years.`}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-start items-stretch w-full">
          <div className="flex flex-col justify-center items-center text-2xl text-center gap-2 px-5 py-3 rounded-lg cursor-pointer card">
            <p className="text-3xl font-medium text-center">{`100+`}</p>
            <p className="text-2xl text-center">{`Agents`}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl text-center gap-2 px-5 py-3 rounded-lg cursor-pointer card">
            <p className="text-3xl font-medium text-center">{`500+`}</p>
            <p className="text-2xl text-center">{`Properties`}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl text-center gap-2 px-5 py-3 rounded-lg cursor-pointer card">
            <p className="text-3xl font-medium text-center">{`10+`}</p>
            <p className="text-2xl text-center">{`Years`}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl text-center gap-2 px-5 py-3 rounded-lg cursor-pointer card">
            <p className="text-3xl font-medium text-center">{`99%`}</p>
            <p className="text-2xl text-center">{`Quality Score`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;