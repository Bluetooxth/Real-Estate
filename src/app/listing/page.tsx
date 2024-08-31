"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [owner, setOwner] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const handleAddProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !title ||
      !description ||
      !price ||
      !location ||
      !owner ||
      !imageUrl
    ) {
      toast.error("Please fill in all fields", {
        position: "bottom-center",
        className: "toast-message",
      });
      return;
    }

    try {
      const propertyData = {
        title,
        description,
        price,
        location,
        owner,
        image: imageUrl,
      };

      const response = await axios.post("/api/properties/add", propertyData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Property added successfully", {
          position: "bottom-center",
          className: "toast-message",
        });
        setTimeout(() => {
          router.push("/properties");
        }, 2000);
      }
    } catch (error) {
      toast.error("Failed to add property", {
        position: "bottom-center",
        className: "toast-message",
      });
    }
  };

  return (
    <section className="flex flex-col justify-start items-center min-h-screen w-full">
      <div className="w-full lg:w-[50vw] lg:container flex flex-col justify-start items-center gap-8 mt-12 mb-12 px-7">
        <h3 className="text-4xl font-medium text-center">Add Property</h3>
        <div className="w-full">
          <h4 className="text-3xl font-medium mb-6">
            Please fill in the property details
          </h4>
          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleAddProperty}
          >
            <label htmlFor="title" className="text-xl font-normal">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description" className="text-xl font-normal">
              Description
            </label>
            <textarea
              placeholder="Description"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label htmlFor="price" className="text-xl font-normal">
              Price
            </label>
            <input
              type="text"
              placeholder="Price"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label htmlFor="location" className="text-xl font-normal">
              Location
            </label>
            <input
              type="text"
              placeholder="Location"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <label htmlFor="owner" className="text-xl font-normal">
              Owner Name
            </label>
            <input
              type="text"
              placeholder="Owner Name"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />

            <label htmlFor="imageUrl" className="text-xl font-normal">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            <button
              type="submit"
              className="text-lg font-medium px-6 py-2 mt-4 rounded-lg self-start btn"
            >
              Add Property
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default AddProperty;
