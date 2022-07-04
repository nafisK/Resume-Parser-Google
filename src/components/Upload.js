import React from "react"
import { useState } from "react"
const axios = require("axios")

export default function Upload() {
  const url = "http://localhost:4000/"
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    file: null,
    created: new Date(),
  })

  const handleForm = e => {
    const newData = { ...data }
    if (e.target.id === "file") {
      newData[e.target.id] = e.target.files[0]
    } else {
      newData[e.target.id] = e.target.value
      setData(newData)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        number: data.number,
        file: data.file,
        created: data.created,
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

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
            <form onSubmit={e => handleSubmit(e)}>
              <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  placeholder='Full Name'
                  id='name'
                  onChange={e => handleForm(e)}
                />
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  id='email'
                  placeholder='Email'
                  onChange={e => handleForm(e)}
                />
                <input
                  required
                  type='text'
                  className='block border border-grey-light w-full p-3 rounded mb-4'
                  id='number'
                  placeholder='Phone Number'
                  onChange={e => handleForm(e)}
                />
                <input
                  required
                  className='form-control block w-full px-3 py-3 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding 
                    border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                    focus:border-blue-600 focus:outline-none'
                  type='file'
                  id='file'
                  onChange={e => handleForm(e)}
                />
                <button
                  type='submit'
                  className='w-full text-indigo-600 text-center py-3 rounded bg-green  hover:bg-green-dark focus:outline-none my-1'
                >
                  Submit
                </button>

                <div className='text-center text-sm text-grey-dark mt-4'>
                  By signing up, you agree to the Terms of Service and Privacy
                  Policy
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
