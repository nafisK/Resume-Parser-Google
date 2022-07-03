import React from "react"
import { QuestionMarkCircleIcon } from "@heroicons/react/solid"

import supportImg from "../assets/support.jpg"

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img
          className='w-full h-full object-cover mix-blend-overlay'
          src={supportImg}
          alt='/'
        />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>
            Support you to reach your maximum potential
          </h2>
          <h3 className='text-5xl font-bold py-6 text-center'>
            Finding the right company
          </h3>
          <p className='py-4 text-3xl text-slate-300 text-center'>
            We know that all our applicants have a different set of experiences
            and skills and we match that up with the right company to fit your
            needs.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <QuestionMarkCircleIcon className='w-16 p-3 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-6'>
                WHAT IS A RESUME/CV PARSER?
              </h3>
              <p className='text-gray-600 text-xl'>
                A resume parser (CV parser) is used within human resource
                software and on recruitment websites, job boards and candidate
                application portals to simplify and accelerate the application
                process.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <QuestionMarkCircleIcon className='w-16 p-3 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-6'>WHAT WE DO</h3>
              <p className='text-gray-600 text-xl'>
                We parse your resume using our specialized algorithm and use
                that data to connect you with job openings that you are perfect
                for.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <QuestionMarkCircleIcon className='w-16 p-3 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl my-6'>
                WHAT RESUME FORMATS CAN FONT. PROCESS?
              </h3>
              <p className='text-gray-600 text-xl'>
                Essentially any non-image resume and CV format, including all of
                the popular job board formats and social and professional
                networks mainly via pdfs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
