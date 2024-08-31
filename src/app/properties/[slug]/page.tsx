"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Property {
  image: string;
  title: string;
  description: string;
  price: string;
  location: string;
  owner: string;
}

const PropertyView: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  const fetchProperties = async () => {
    try {
      const response = await axios.post("/api/properties/getone", { slug });
      setProperties([response.data.property]);
    } catch (error) {
      console.error("Error fetching property:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [slug]);

  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      {loading ? (
        <p className="text-2xl">Loading...</p>
      ) : properties.length > 0 ? (
        <div className="flex flex-col justify-start items-center gap-7 lg:container px-7 mt-12 mb-12 w-full">
          {properties.map((property, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-5 w-full"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-start items-start gap-5 w-full">
                <h2 className="text-3xl lg:text-4xl font-medium">
                  {property.title}
                </h2>
                <p className="text-xl">{property.description}</p>
                <div className="flex flex-col justify-start items-start w-full">
                  <p className="text-xl font-medium">
                    Price: <span className="text-xl font-normal">{property.price}</span>
                  </p>
                  <p className="text-xl font-medium">
                    Location: <span className="text-xl font-normal">{property.location}</span>
                  </p>
                  <p className="text-xl font-medium">
                    Owner: <span className="text-xl font-normal">{property.owner}</span>
                  </p>
                </div>
              </div>
              <Link
                href={{
                  pathname: "/schedule",
                  query: {
                    propertyName: property.title,
                    propertyLocation: property.location,
                  },
                }}
                className="self-start"
              >
                <p className="text-lg font-medium px-6 py-2 mt-4 rounded-lg self-start btn">
                  Schedule a visit
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-2xl">Property not found</p>
      )}
    </section>
  );
};

export default PropertyView;