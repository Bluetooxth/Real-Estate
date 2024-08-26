"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!name || !username || !email || !password) {
        toast.error("Please fill in all fields",{
          position: "bottom-center",
          className: "toast-message",
        });
        return;
      }

      const response = await axios.post(
        "/api/user/signup",
        { name, username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message,{
          position: "bottom-center",
          className: "toast-message",
        });
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error) {
      toast.error("Error creating account",{
        position: "bottom-center",
        className: "toast-message",
      });
    }
  };

  return (
    <section className="flex flex-col justify-start items-center min-h-screen w-full">
      <div className="w-full lg:w-[50vw] lg:container flex flex-col justify-start items-center gap-8 mt-12 mb-12 px-7">
        <h3 className="text-4xl font-medium text-center">Signup</h3>
        <div className="w-full">
          <h4 className="text-3xl font-medium mb-6">
            Create a new account
          </h4>
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSignup}>
            <label htmlFor="name" className="text-xl font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="username" className="text-xl font-medium">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="text-lg font-normal px-4 py-2 w-full rounded-lg bg-transparent outline-none input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            
            <p>
              {`Already have an account? `}
              <Link href="/login" className="refer hover:underline font-medium">
                Login
              </Link>
            </p>
            <button
              type="submit"
              className="text-lg font-medium px-6 py-2 mt-4 rounded-lg self-start btn"
            >
              Signup
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Signup;