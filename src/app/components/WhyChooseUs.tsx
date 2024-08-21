import React from 'react'
import { BsBuildings } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiPowervirtualagents } from "react-icons/si";

const WhyChooseUs = () => {

    const whychoose = [
        {
            title: 'Best Properties',
            description: 'Find your perfect home with the top properties in the city.',
            icon: <BsBuildings />
        },
        {
            title: 'Experienced Agents',
            description: 'Our seasoned agents will help you find your ideal home.',
            icon: <LuUsers />
        },
        {
            title: 'Customer Service',
            description: 'Count on us for excellent support in all your real estate needs.',
            icon: <RiCustomerService2Line />
        },
        {
            title: 'Easy Process',
            description: 'Enjoy a seamless home-buying experience with our guidance.',
            icon: <SiPowervirtualagents />
        }
    ];    

  return (
    <section className='flex justify-center items-center w-full'>
        <div className="flex flex-col justify-center items-start gap-5 lg:container px-7">
            <h2 className='text-4xl font-medium self-start'>Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch justify-start gap-5 w-full">
                {whychoose.map((item, index) => (
                    <div key={index} className='flex flex-col justify-start items-center text-center gap-2 p-5 rounded-lg cursor-pointer w-full card'>
                        <p className='text-5xl'>{item.icon}</p>
                        <h3 className='text-2xl font-medium'>{item.title}</h3>
                        <p className='text-xl'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs