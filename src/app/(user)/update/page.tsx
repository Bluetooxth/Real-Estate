"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    email: "",
  });

  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const router = useRouter();

  const fetchProfile = async () => {
    try {
      const response = await axios.get("/api/user/me");
      if (response.data && response.data.data) {
        setUser({
          name: response.data.data.name || "",
          username: response.data.data.username || "",
          email: response.data.data.email || ""
        });
      }
    } catch (error) {
      console.log("Error fetching profile:", error);
    }
  };

  const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put("/api/user/updateuser", {
        name: user.name,
        username: user.username,
        email: user.email,
        password: password,
        newPassword: newPassword,
      });
      console.log("Update Response:", response.data);
      router.push("/profile");
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  React.useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="flex flex-col justify-start items-center min-h-screen w-full">
      <div className="w-full lg:w-[50vw] lg:container flex flex-col justify-start items-center gap-8 mt-16 mb-16 px-7">
        <h3 className="text-5xl font-medium text-center">Update Profile</h3>
        <div className="w-full">
          <h4 className="text-3xl font-medium mb-6">
            Update your profile information
          </h4>
          <form className="flex flex-col gap-4 w-full" onSubmit={updateProfile}>
            <label htmlFor="name" className="text-xl font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={user.name || ""}
              onChange={handleChange}
            />

            <label htmlFor="username" className="text-xl font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={user.username || ""}
              onChange={handleChange}
            />

            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={user.email || ""}
              onChange={handleChange}
            />

            <label htmlFor="password" className="text-xl font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="newPassword" className="text-xl font-medium">
              New Password
            </label>
            <input
              type="password"
              placeholder="New Password"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              type="submit"
              className="text-lg font-medium px-6 py-2 mt-4 rounded-lg self-start btn"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;