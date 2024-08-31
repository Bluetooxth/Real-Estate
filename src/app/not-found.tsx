import React from 'react'

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-screen text-center px-7">
      <h1 className='text-5xl lg:text-6xl font-medium'>404 - Page Not Found</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
    </div>
  )
}