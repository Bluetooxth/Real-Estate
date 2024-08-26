import React from 'react'
import { Pixelify_Sans } from 'next/font/google';

const pixel = Pixelify_Sans(
  {subsets: ['latin']}
)

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center text-5xl font-medium w-full h-screen">
      <h1 className={pixel.className}>404 - Page Not Found</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
    </div>
  )
}