import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <div className='bg-gray-400 text-white pt-20'>
        <div className='flex justify-center items-center flex-col-reverse md:flex-row md:gap-50 '>
          {/* left side */}
          <div className='text-center p-2 max-w-2xl'>
            <div className='flex flex-col justify-center m-2 p-2 items-center'>
              <h1 className='font-bold text-3xl text-black'>Newo Developer</h1>
              <h2 className='text-slate-800 p-1'>Frontend Developer</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto ut possimus sint dicta iusto enim. Praesentium doloribus accusantium et iusto facere voluptatum, soluta,
                magnam laudantium voluptas quidem exercitationem! Ex provident vero illo quam eveniet, nam cupiditate obcaecati porro, incidunt perferendis id magni esse dignissimos cum.
              </p>
            </div>
            <div className='md:flex justify-center'>
              <a href="./logo.jpeg" download>
                <button className='bg-green-500 font-bold p-4 m-4 rounded-sm hover:scale-105 transition duration-700 text-white'>
                  Download CV
                </button>
              </a>
              <Link to="/contact">
                <button className='bg-green-500 font-bold p-4 m-4 rounded-sm hover:scale-105 transition duration-300 text-white'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          {/* Right image profile */}
          <div className='flex justify-center items-cente max-w-full p-4'>
            <img src="/logo.jpeg" alt="profile" className='md:h-80 h-60 rounded-full p-2 md:mr-15' />
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero
