import React from 'react'
import Home from '../pages/Home'
import { Project } from '../constants/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Footer() {
  return (
    <>
      <footer>
        <div className='flexn felx-col bg-slate-500'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-4 p-2 justify-end text-xl text-shadow-2xs '>
              <a href="/" element={<Home />}>Home</a>
              <a href="/about" element={<About />}>About</a>
              <a href="/project" element={<Project />}>Projects</a>
              <a href="/contact" element={<Contact />}>Contact</a>
            </div>
            <div className='flex justify-end items-start gap-2 m-2 p-2'>
              <a href="https://www.facebook.com/" className='bg-blue-200 text-solid-black rounded-xl p-1'>Facebook</a>
              <a href="https://www.linkedin.com/in/navin-saud-3ab61625a/" className='bg-blue-200 text-solid-black rounded-xl p-1'>Linkedin </a>
              <a href="https://github.com/" className='bg-blue-200 text-solid-black rounded-xl p-1'>Github </a>
              <a href="https://www.youtube.com/@Newosaud188" className='bg-blue-200 text-solid-black rounded-xl p-1'>Youtube </a>
              
            </div>
          </div>

          <div className='flex justify-center bg-slate-600'>
            <p>© 2026 Reserved by Navin.</p>
          </div>
        </div>

      </footer>

    </>
  )
}

export default Footer
