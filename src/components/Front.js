import React from "react"
import resume from "../assets/resume.png"

export default function Front() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Apply with</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Find.</h1>
          <p className='text-2xl lowercase'>
            THE FASTEST & MOST ACCURATE RESUME PARSER IN THE WORLD THAT CONNECTS
            YOU WITH EMPLOYERS
          </p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
          <img src={resume} className='w-full h-full' alt='' />
        </div>
      </div>
    </div>
  )
}
