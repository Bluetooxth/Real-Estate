"use client";
import React, { useEffect } from "react";
import axios from "axios";
import PropertyCard from "@/app/components/PropertyCard";

const Properties = () => {
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
      setProperties(response.data.properties);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      <div className="flex flex-col justify-start items-center gap-7 lg:container px-7 mt-12 mb-12 w-full">
        <h3 className="text-5xl font-medium text-center self-center">
          Properties
        </h3>
        <h4 className="text-2xl font-medium self-start">
          Explore our diverse listings, from luxurious homes to affordable
          apartments, and discover your next dream property with us.
        </h4>
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
      </div>
    </section>
  );
};

export default Properties;