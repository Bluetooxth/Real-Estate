"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScheduleView = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  
  const searchParams = useSearchParams();
  const router = useRouter();

  const propertyName = searchParams.get("propertyName") || "";
  const propertyLocation = searchParams.get("propertyLocation") || "";

  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user/me/");
      setUser({
        name: response.data.user.name,
        email: response.data.user.email,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!user.name || !user.email || !phone || !date || !time || !propertyName || !propertyLocation) {
        toast.error("Please fill in all fields", {
          position: "bottom-center",
          className: "toast-message",
        });
        return;
      }

      const response = await axios.post(
        "/api/schedule/add",
        {
          name: user.name,
          email: user.email,
          phone,
          date,
          time,
          propertyName,
          propertyLocation,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message, {
          position: "bottom-center",
          className: "toast-message",
        });
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      }
    } catch (error) {
      toast.error("Failed to schedule, please try again", {
        position: "bottom-center",
        className: "toast-message",
      });
    }
  };

  return (
    <section className="flex flex-col justify-start items-center min-h-screen w-full">
      <div className="w-full lg:w-[50vw] lg:container flex flex-col justify-start items-center gap-8 mt-12 mb-12 px-7">
        <h3 className="text-4xl font-medium text-center">Schedule a Viewing</h3>
        <div className="w-full">
          <h4 className="text-3xl font-medium mb-6">Fill in the details to schedule a property viewing</h4>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSchedule}>
            <label htmlFor="propertyName" className="text-xl font-normal">Property Name</label>
            <input
              type="text"
              placeholder="Property Name"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={propertyName}
              readOnly
            />

            <label htmlFor="propertyLocation" className="text-xl font-normal">Property Location</label>
            <input
              type="text"
              placeholder="Property Location"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={propertyLocation}
              readOnly
            />

            <label htmlFor="name" className="text-xl font-normal">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={user.name}
            />

            <label htmlFor="email" className="text-xl font-normal">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={user.email}
            />

            <label htmlFor="phone" className="text-xl font-normal">Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="date" className="text-xl font-normal">Date</label>
            <input
              type="date"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <label htmlFor="time" className="text-xl font-normal">Time</label>
            <input
              type="time"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button
              type="submit"
              className="text-lg font-medium px-6 py-2 mt-4 rounded-lg self-start btn"
            >
              Schedule
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ScheduleView;