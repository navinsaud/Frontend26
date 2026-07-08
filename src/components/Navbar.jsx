import React, { useState } from 'react'
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [{ // Array is a Ordered collection,eg: arr[0]
    name: "Home",  // Object is a key: value collection,eg: obj.name and 
    path: "./"
  },
  {
    name: "About",
    path: "./about"
  },
  {
    name: "Projects",
    path: "./project"
  },
  {
    name: "Contact",
    path: "./contact"
  },
  ]
  return (<>
    <nav className='bg-slate-500 text-white fixed w-full z-10 '>
      <div className='flex justify-between items-center h-20 md:h-20 p-2 '>

        <NavLink to="/" className="flex items-center font-bold text-xl">
          <img src="navlogo.jpeg" alt="logo" className='h-13 w-13 p-1 m-1 rounded-full' />
          <h1>Newo</h1>
        </NavLink>

        <button onClick={() => setOpen(!open)} className='font-bold md:hidden bg-blue-400 p-2 hover:scale-110 transition duration-500 ease-in-out m-2'>
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

          <ul className='md:flex hidden gap-4 mr-10 font-bold items-center'>
            {navLinks.map((link, index) => (
              <li key={index} className='hover:scale-110 transition duration-200 ease-in-out'>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
      </div>

        {open &&
          <ul className='flex flex-col border-2 w-20 p-3 m-1 items-start gap-4 mr-0.5 font-bold  text-white'>

            {navLinks.map((link, index) => (
              <li key={index} className='hover:scale-110 transition duration-200 ease-in-out'>
                <Link onClick={() => setOpen(false)} to={link.path}>{link.name}</Link>
              </li> //onClick={()=>setopen(!open)} is used to close the menu when a link is clicked.
            ))}

          </ul>
        }     
    </nav>
  </>)
}

export default Navbar
