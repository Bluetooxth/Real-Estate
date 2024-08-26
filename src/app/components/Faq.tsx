import React from 'react';

const FAQ = () => {

    const faqs = [
        {
            question: 'What is the process for buying a property?',
            answer: 'The process involves finding the right property, securing financing, making an offer, and closing the deal. Each step should be handled with the help of professionals like real estate agents and lawyers.'
        },
        {
            question: 'Are there any hidden costs in buying a home?',
            answer: 'Apart from the purchase price, you should consider closing costs, property taxes, home insurance, and maintenance expenses. It’s important to budget for these additional costs.'
        },
        {
            question: 'How can I get a mortgage?',
            answer: 'To get a mortgage, you’ll need to apply with a bank or a mortgage lender, provide your financial details, and get pre-approved. Make sure to shop around for the best rates.'
        },
        {
            question: 'What should I look for in a neighborhood?',
            answer: 'Consider the quality of local schools, proximity to work, public transportation, safety, and community amenities. Visiting the neighborhood at different times of the day can also provide insights.'
        },
        {
            question: 'How do I know if a property is a good investment?',
            answer: 'A good investment property should have potential for appreciation, a favorable location, and a strong rental demand if you plan to rent it out. Consulting with a real estate professional can also help.'
        },
    ];

    return (
        <section className='flex justify-center items-center w-full'>
            <div className="flex flex-col justify-center items-start gap-5 lg:container px-7 w-full">
                <h2 className='text-3xl lg:text-4xl font-medium self-start'>Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 items-stretch justify-start gap-5 w-full">
                    {faqs.map((faq, index) => (
                        <div key={index} className='flex flex-col justify-start items-start gap-2 rounded-lg overflow-hidden cursor-pointer w-full card'>
                            <details className='p-5 w-full'>
                                <summary className='text-xl font-normal cursor-pointer'>{faq.question}</summary>
                                <p className='text-lg mt-2'>{faq.answer}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;