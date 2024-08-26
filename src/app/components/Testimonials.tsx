"use client"
import React, { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: -300, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: 300, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const testimonials = [
    {
      name: 'Client 1',
      title: 'Homeowner',
      content: 'Finding our dream home was a breeze with Real Estate Co. The team was incredibly supportive and made the entire process stress-free.'
    },
    {
      name: 'Client 2',
      title: 'Investor',
      content: 'Real Estate Co. helped me find the perfect investment property. Their market knowledge and professional approach were top-notch.'
    },
    {
      name: 'Client 3',
      title: 'Renter',
      content: 'I found a great rental through Real Estate Co. The process was smooth, and the customer service was excellent.'
    },
    {
      name: 'Client 4',
      title: 'Seller',
      content: 'Selling my home was quick and easy with Real Estate Co. They provided expert guidance and ensured I got the best price.'
    },
    {
      name: 'Client 5',
      title: 'Buyer',
      content: 'Real Estate Co. helped me find my dream home. Their agents were professional, knowledgeable, and always available to answer my questions.'
    }
  ];

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col items-start lg:container w-full gap-5">
        <div
          className="w-full overflow-x-auto rounded-lg"
          style={{
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          ref={testimonialsRef}
        >
          <div className="flex gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col justify-start items-start gap-2 p-5 rounded-lg cursor-pointer card w-80"
                style={{ whiteSpace: 'normal' }}
              >
                <h3 className="text-2xl font-medium">{testimonial.name}</h3>
                <h4 className="text-xl font-normal">{testimonial.title}</h4>
                <i className="text-lg">"{testimonial.content}"</i>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex justify-center items-center gap-7 w-full">
          <FaArrowAltCircleLeft className="text-5xl cursor-pointer" onClick={scrollLeft} />
          <FaArrowAltCircleRight className="text-5xl cursor-pointer" onClick={scrollRight} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;