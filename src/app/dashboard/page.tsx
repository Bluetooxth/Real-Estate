"use client";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { RiDeleteBin2Fill } from "react-icons/ri";

interface User {
  name: string;
  username: string;
  email: string;
}

interface ScheduleItem {
  _id: string;
  propertyName: string;
  propertyLocation: string;
  date: string;
  time: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = React.useState<User>({
    name: "",
    username: "",
    email: "",
  });
  const [schedule, setSchedule] = React.useState<ScheduleItem[]>([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user/me/");
      setUser({
        name: response.data.user.name,
        username: response.data.user.username,
        email: response.data.user.email,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchSchedule = async (email: string) => {
    try {
      const response = await axios.post("/api/schedule/get", {
        userEmail: email,
      });
      setSchedule(response.data.schedule);
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      await fetchUser();
    };

    loadUserData().then(() => {
      if (user.email) {
        fetchSchedule(user.email);
      }
    });
  }, [user.email]);

  const deleteSchedule = async (id: string) => {
    try {
      await axios.delete(`/api/schedule/remove`, { data: { id } });
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  }

  const logout = async () => {
    try {
      await axios.get("/api/user/logout");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.error("Error logging out user:", error);
    }
  }

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
            {/* <Link href='/update' className="btn text-lg font-medium px-5 py-2 rounded-lg mt-2 flex gap-2 items-center">
              Edit Profile
            </Link> */}
            <button onClick={logout} className="btn text-lg font-medium px-5 py-2 rounded-lg mt-2 flex gap-2 items-center">
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-5">
          <h4 className="text-3xl font-medium">Your schedule</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-center gap-5 w-full">
            {schedule.length > 0 ? (
              schedule.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col gap-2 w-full rounded-lg p-5 card cursor-pointer"
                >
                  <p className="text-2xl font-medium">
                    {item.propertyName}
                  </p>
                  <p className="text-xl font-medium">{item.propertyLocation}</p>
                  <p className="text-xl font-normal">
                    Date: {new Date(item.date).toDateString()}
                  </p>
                  <p className="text-xl font-normal">Time: {item.time}</p>
                <button onClick={() => deleteSchedule(item._id)} className="text-2xl mt-2 text-red-500 hover:text-red-600 p-2 bg-white hover:bg-slate-200 slow rounded-full self-end">
                  <RiDeleteBin2Fill />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-2xl font-normal">No schedules found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;