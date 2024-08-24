import React from "react";

const About = () => {
  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      <div className="flex flex-col justify-start items-center gap-7 lg:container px-7 mt-12 mb-12 w-full">
        <h3 className="text-5xl font-medium text-center self-center">
          About Us
        </h3>
        <h4 className="text-3xl font-medium self-start">
          Welcome to Our Real Estate Platform
        </h4>
        <p className="text-xl font-normal self-start">
          {`At Real Estate, we are dedicated to helping you find the perfect
          property that suits your needs and lifestyle. Whether you're looking
          to buy, sell, or rent, our platform offers a seamless experience,
          connecting you with the best properties on the market.`}
        </p>
        <p className="text-xl font-normal self-start">
          {`With years of experience in the real estate industry, our team of
          experts is here to guide you every step of the way. We pride ourselves
          on our commitment to transparency, trust, and customer satisfaction.
          Explore our diverse listings, from luxurious homes to affordable
          apartments, and discover your next dream property with us.`}
        </p>
        <p className="text-xl font-normal self-start">
          {`Our mission is to simplify the real estate process and empower our
          clients with the tools and knowledge they need to make informed
          decisions. We believe in building long-lasting relationships with our
          clients, based on honesty and mutual respect.`}
        </p>
        <p className="text-xl font-normal self-start">
          {`At Real Estate, we understand that buying or selling a property is
          more than just a transaction—it's a life-changing experience. That's
          why we are committed to providing personalized service, tailored to
          meet the unique needs of each client. Our user-friendly platform
          ensures that you have access to all the information you need to make
          the best decision for your future.`}
        </p>
        <p className="text-xl font-normal self-start">
          {`Whether you're a first-time homebuyer or a seasoned investor, Real
          Estate is your trusted partner in navigating the complexities of the
          real estate market. We are here to make your real estate journey as
          smooth and stress-free as possible, turning your property dreams into
          reality.`}
        </p>
        <p className="text-xl font-normal self-start">
          {`Thank you for choosing Real Estate. We look forward to helping you
          find your perfect home.`}
        </p>
      </div>
    </section>
  );
};

export default About;