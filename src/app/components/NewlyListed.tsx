import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const NewlyListed = () => {
  const properties = [
    {
      title: "Luxury Villa",
      price: "$1,200,000",
      location: "Los Angeles, CA",
      image: "/images/luxuryvilla.jpg",
    },
    {
      title: "Modern House",
      price: "$1,000,000",
      location: "Miami, FL",
      image: "/images/modernhouse.jpg",
    },
    {
      title: "Beach House",
      price: "$1,500,000",
      location: "Malibu, CA",
      image: "/images/beachhouse.jpg",
    },
  ];

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-start gap-5 lg:container px-7">
        <h2 className="text-3xl lg:text-4xl font-medium self-start">
          Newly Listed Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-start gap-5 w-full">
          {properties.map((property, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-2 rounded-lg overflow-hidden cursor-pointer w-full card"
            >
              <div className="overflow-hidden w-full h-[250px]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full transition-transform hover:scale-110 slow"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-2 p-5 w-full">
                <h3 className="text-2xl font-medium">{property.title}</h3>
                <p className="text-2xl">{property.price}</p>
                <p className="text-xl">{property.location}</p>
                <button className="cardbtn text-lg font-medium px-5 py-2 rounded-lg w-full">
                  View Property
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="btn text-lg font-medium px-5 py-2 rounded-lg self-center mt-2 flex gap-2 items-center">
          Explore all <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default NewlyListed;