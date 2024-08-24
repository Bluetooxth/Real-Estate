"use client";
import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
import axios from "axios";
const Popular = () => {
  const [properties, setProperties] = React.useState([
    {
      slug: "",
      title: "",
      price: "",
      location: "",
      image: "",
    },
  ]);

  const fetchProperties = async () => {
    try {
      const response = await axios.get("/api/properties/get");
      setProperties(response.data.properties.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-start gap-5 lg:container px-7">
        <h2 className="text-3xl lg:text-4xl font-medium self-start">
          Popular Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-start gap-5 w-full">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              slug={property.slug}
              title={property.title}
              price={property.price}
              location={property.location}
              image={property.image}
            />
          ))}
        </div>
        <Link
          href="/properties"
          className="btn text-lg font-medium px-5 py-2 rounded-lg self-center mt-2 flex gap-2 items-center"
        >
          Explore all <IoIosArrowForward />
        </Link>
      </div>
    </section>
  );
};

export default Popular;