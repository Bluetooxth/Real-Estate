import React from "react";
import Link from "next/link";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const Footer = () => {

    const propertyLinks = [
        {
            name: "Properties",
            url: "/properties"
        },
        {
            name: "List Property",
            url: "/listing"
        },
        {
            name: "Schedule Viewing",
            url: "/schedule"
        }
    ]

    const companyLinks = [
        {
            name: "Privacy Policy",
            url: "/privacy-policy"
        },
        {
            name: "Terms and Conditions",
            url: "/terms-and-conditions"
        },
        {
            name: "About Us",
            url: "/about"
        },
        {
            name: "Careers",
            url: "/careers"
        }
    ]

    const contactUs = [
        {
            address: "1234 Real Estate St, City, Country",
            email: "info@realestate.com",
            phone: "0123456789"
        }
    ]

    return (
        <footer className="flex flex-col justify-center items-center w-full footer pt-10 footer">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:container px-7">
                <div className="flex flex-col justify-start h-full">
                    <h1 className="text-2xl md:text-3xl font-medium flex items-center gap-2"><MdOutlineRealEstateAgent /> Real Estate</h1>
                    <ul className="flex flex-col gap-2 items-start mt-2">
                        <li className="text-lg">Your trusted partner in finding your dream property. Explore the best deals and services with us.</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start h-full">
                    <h3 className="text-xl font-medium mb-2">Property Services</h3>
                    <ul className="flex flex-col gap-2 items-start">
                        {propertyLinks.map((link, index) => (
                            <li key={index} className="text-lg">
                                <Link href={link.url} className="hover:underline transition duration-500 ease-in-out">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-start h-full">
                    <h3 className="text-xl font-medium mb-2">Company</h3>
                    <ul className="flex flex-col gap-2 items-start">
                        {companyLinks.map((link, index) => (
                            <li key={index} className="text-lg">
                                <Link href={link.url} className="hover:underline transition duration-500 ease-in-out">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-start h-full">
                    <h3 className="text-xl font-medium mb-2">Contact Us</h3>
                    {contactUs.map((contact, index) => (
                    <ul key={index} className="flex flex-col gap-2 items-start">
                        <li className="text-lg">{contact.address}</li>
                        <li className="text-lg">{contact.email}</li>
                        <li className="text-lg">{contact.phone}</li>
                    </ul>
                    ))}
                </div>
            </div>
            <span className="w-full h-[1px] bg-slate-200 mt-3"/>
            <p className="text-md my-3">All rights reserved @RealEstate</p>
        </footer>
    );
};

export default Footer;