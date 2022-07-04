import React from "react"

const Process = () => {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>
            Trusted by Professionals across the world
          </h2>
          <p className='text-3xl py-6 text-gray-500'>
            We help distribute your resume from top companies to startups with
            our specialized algorithm
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border p-10 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>
              ADVANCED SECURITY
            </p>
            <p className='text-gray-400 mt-2'>
              Worried about protecting your data with our Resume Parser? Relax!
              We never store anything that you send us, nor any processed
              results, and all transactions are encrypted end-to-end. So,
              there's nothing to steal.
            </p>
          </div>
          <div className='border p-10 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>
              FAST & ACCURATE
            </p>
            <p className='text-gray-400 mt-2'>
              Being the most accurate or the fastest is great, but being both is
              even better. Whether you're parsing one - or one million -
              resumes, our Resume Parser produces 10X fewer mistakes than our
              competitors while maintaining median processing times under half a
              second, which is 5-25x faster than the other guys.
            </p>
          </div>
          <div className='border p-10 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>
              DIVERSE BY DESIGN
            </p>
            <p className='text-gray-400 mt-2'>
              Our Resume Parser identifies all Personal Data/PII and returns a
              second fully anonymized copy of the resume. The Resume Parser
              intentionally removes bias and promotes fact-based and merit-based
              hiring practices so you can always get the best possible
              candidates for your jobs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
