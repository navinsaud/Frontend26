import React from 'react'

function Contact() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-12'>
        <div>
          <h1 className='font-bold text-green-500 text-4xl mt-20 '>
            Contact Us
          </h1>
        </div>
        <form className='flex flex-col w-full max-w-md border-2 border-gray-900 rounded-2xl space-y-4 p-4'>
          <h1 className='font-bold text-xl text-center text-green-500'>Hi, how can i help you?</h1>

          <div className='flex-col flex '>
            <label>Full Name :</label>
            <input type="text" placeholder='Enter Your Full Name' required className='border-2 border-gray-300 p-1 rounded-sm' />
          </div>

          <div className='flex flex-col'>
            <label>Email :</label>
            <input type="email" placeholder='Email' required className='border-2 border-gray-300 p-1 rounded-sm' />
          </div>

          <div className='flex flex-col'>
            <label>Subject :</label>
            <input type="text" placeholder='Subject' required className='border-2 border-gray-300 p-1 rounded-sm' />
          </div>

          <div className='flex flex-col'>
            <label>Message :</label>
            <textarea rows={4} placeholder='Your message' className='border-2 border-gray-300 p-1 rounded-sm'></textarea>
          </div>

          <button className='bg-blue-800 text-white rounded-2xl font-bold h-10 hover:bg-green-400 transition duration-900 ease-in-out'>Send Message</button>
        </form>
      </div>
    </>
  )
}

export default Contact
