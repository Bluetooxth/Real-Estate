import Link from "next/link";
import React from "react";

interface PropertyCardProps {
  slug: string;
  title: string;
  location: string;
  image: string;
  price: string;
}

const PropertyCard = ({
  slug,
  title,
  location,
  image,
  price,
}: PropertyCardProps) => {
  return (
    <div className="flex flex-col justify-start items-center gap-2 rounded-lg overflow-hidden cursor-pointer w-full card">
      <div className="overflow-hidden w-full h-[250px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full transition-transform hover:scale-110 slow"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-2 p-5 w-full">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-2xl">{price}</p>
        <p className="text-xl">{location}</p>
        <Link
          href={`/properties/${slug}`}
          className="cardbtn text-lg font-medium px-5 py-2 rounded-lg w-full text-center"
        >
          View Property
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;