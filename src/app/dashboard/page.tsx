"use client";
import React, { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    email: "",
  });

  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user/me/");
      setUser({
        name: response.data.user.name,
        username: response.data.user.username,
        email: response.data.user.email,
      });
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      <div className="flex flex-col justify-start items-start gap-7 lg:container px-7 mt-12 mb-12 w-full">
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <h3 className="text-4xl font-medium text-center self-center">
            Dashboard
          </h3>
          <h4 className="text-3xl font-medium">Welcome to the dashboard</h4>
          <div className="font-medium">
            <p className="flex items-center gap-2 text-2xl font-medium">
              Name:
              <span className="text-xl font-normal">{user.name}</span>
            </p>
            <p className="flex items-center gap-2 text-2xl font-medium">
              Username:
              <span className="text-xl font-normal">{user.username}</span>
            </p>
            <p className="flex items-center gap-2 text-2xl font-medium">
              Email:
              <span className="text-xl font-normal">{user.email}</span>
            </p>
          </div>
          <div className="flex gap-5 justify-start items-center w-full">
            <button className="btn text-lg font-medium px-5 py-2 rounded-lg mt-2 flex gap-2 items-center">
              Edit Profile
            </button>
            <button className="btn text-lg font-medium px-5 py-2 rounded-lg mt-2 flex gap-2 items-center">
              Logout
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Dashboard;