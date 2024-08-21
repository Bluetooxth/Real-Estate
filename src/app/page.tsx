import React from 'react'
import Hero from './components/Hero'
import Popular from './components/Popular'
import WhyChooseUs from './components/WhyChooseUs'
import NewlyListed from './components/NewlyListed'
import Testimonials from './components/Testimonials'
import FAQ from './components/Faq'

const Home = () => {
  return (
    <div className='space-y-16 mb-16'>
      <Hero />
      <WhyChooseUs />
      <Popular />
      <NewlyListed />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default Home