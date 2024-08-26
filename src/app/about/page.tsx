import React from "react";
import Testimonials from "../components/Testimonials";
import GetInTouch from "../components/GetinTouch";
import Achievements from "../components/Achievements";
import AboutUsContent from "../components/AboutUs";

const About = () => {
  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      <div className="flex flex-col justify-start items-center space-y-16 lg:container px-7 mt-12 mb-12 w-full">
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <h3 className="text-4xl font-medium text-center self-center mb-2">
            About Us
          </h3>
          <AboutUsContent />
        </div>
        <div className="flex flex-col justify-start items-start gap-3 w-full">
        <h2 className="text-3xl font-medium self-start">
          Our Achievements
        </h2>
        <Achievements />
      </div>
        <div className="flex flex-col justify-start items-start gap-3 w-full">
        <h2 className="text-3xl font-medium self-start">
          Get in Touch
        </h2>
        <GetInTouch />
      </div>
      <div className="flex flex-col justify-start items-start gap-3 w-full">
        <h2 className="text-3xl font-medium self-start">
          What Our Clients Say
        </h2>
        <Testimonials />
      </div>
      </div>
    </section>
  );
};

export default About;