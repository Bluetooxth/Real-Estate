"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setTimeout(() => {
      setNavbar(false);
    }, 500);
  };

  return (
    <nav className="flex justify-center items-center w-full sticky top-0 z-20 navbar">
      <div className="flex flex-col justify-start items-start lg:container w-full px-5 py-3">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="text-3xl font-medium flex gap-2 items-center">
            <MdOutlineRealEstateAgent /> Estate
          </Link>
          {/* Links */}
          <div className="lg:flex hidden space-x-10">
            <Link
              href="/"
              className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              About US
            </Link>
            <Link
              href="/properties"
              className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              Properties
            </Link>
            <Link
              href="/listing"
              className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              Listing
            </Link>
            <Link
              href="/login"
              className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
            >
              Account
            </Link>
          </div>
          {/* Menu Icons */}
          <button
            className="flex lg:hidden items-center justify-center"
            onClick={toggleNavbar}
          >
            {navbar ? (
              <RiCloseLine className="text-3xl" />
            ) : (
              <RiMenuLine className="text-3xl" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden w-full flex flex-col justify-start items-start mt-3 space-y-5 ${
            navbar ? "flex" : "hidden"
          }`}
        >
          <Link
            href="/"
            onClick={closeNavbar}
            className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeNavbar}
            className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            About US
          </Link>
          <Link
            href="/properties"
            onClick={closeNavbar}
            className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            Properties
          </Link>
          <Link
            href="/listing"
            onClick={closeNavbar}
            className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            Listing
          </Link>
          <Link
            href="/login"
            onClick={closeNavbar}
            className="text-lg py-2 px-3 border-b-2 border-transparent hover:border-slate-200 transition ease-in-out slow"
          >
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;