import React from "react";

const Testimonials = () => {

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
        }
    ];
    

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-start gap-5 lg:container px-7">
        <h2 className="text-4xl font-medium self-start">Clients Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch justify-start gap-5 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-2 p-5 rounded-lg cursor-pointer w-full card"
            >
              <h3 className="text-2xl font-medium self-start">{testimonial.name}</h3>
              <h4 className="text-xl font-normal self-start">{testimonial.title}</h4>
              <p className="text-lg self-start">{testimonial.content}</p>
            </div>
          ))}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;