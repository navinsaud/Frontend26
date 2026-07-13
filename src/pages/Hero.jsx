import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <div className='bg-gray-400 text-white pt-20'>
        <div className='flex justify-center items-center flex-col-reverse md:flex-row md:gap-0 md:justify-around '>
          {/* left side */}
          <div className='text-center p-2 max-w-2xl'>
            <div className='flex flex-col justify-center m-2 p-2 items-center'>
              <h1 className='font-bold text-3xl text-black'>Er. Navin Saud </h1>
              <h2 className='text-slate-800 p-1 text-xl font-semibold'>BE Computer </h2>
              <h2 className='text-slate-800 p- mb-6'>Software Developer</h2>
              <p>Motivated and detail-oriented Computer Engineering graduate with hands-on experience in MERN stack development
                and a strong foundation in programming, data structures, and web technologies. Adept at learning new technologies quickly,
                collaborating in team-based projects, and solving complex problems through clean and efficient code.
              </p>
            </div>
            <div className='md:flex justify-center'>
              <a href="./CV_NAVIN.pdf" download>
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
          <div className='flex justify-center items-cente max-w-full p-4 mt-4 md:mt-0'>
            <img src="/navinpic.jpg" alt="profile" className='md:h-80 md:max-w-75 h-60 rounded-full p-2 md:mr-15' />
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero
