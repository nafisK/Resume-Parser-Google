import React from "react"

export default function Upload() {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>
            Send us your resume to be considered
          </h2>
        </div>

        <div className='py-9 md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border p-10 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>
              Upload Your Resume
            </p>
            <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
              <input
                type='text'
                class='block border border-grey-light w-full p-3 rounded mb-4'
                name='fullname'
                placeholder='Full Name'
              />
              <input
                type='text'
                class='block border border-grey-light w-full p-3 rounded mb-4'
                name='email'
                placeholder='Email'
              />
              <input
                type='password'
                class='block border border-grey-light w-full p-3 rounded mb-4'
                name='text'
                placeholder='Phone Number'
              />
              <input
                class='form-control block w-full px-3 py-3 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding 
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                focus:border-blue-600 focus:outline-none'
                type='file'
                id='formFile'
              />
              <button
                type='submit'
                class='w-full text-indigo-600 text-center py-3 rounded bg-green  hover:bg-green-dark focus:outline-none my-1'
              >
                Create Account
              </button>

              <div class='text-center text-sm text-grey-dark mt-4'>
                By signing up, you agree to the Terms of Service and Privacy
                Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
