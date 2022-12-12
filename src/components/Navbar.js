import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
// Icons =============================>>>>>>>>>>>>>>>>>>>>>>>>>
import { RiMenu3Line } from 'react-icons/ri'
import { BsBehance } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
//===================================>>>>>>>>>>>>>>>>>>>>>>>>>>>


export default function Navbar() {

  const [open, setOpen] = useState(true);


  return (
    <div className='fixed w-screen z-50'>
      <div className="w-[80vw] pt-[2em] mx-auto flex  ">
        <Link to='/' className='text-white font-bold'>O k i k i o l a.</Link>

        <button className="ml-auto md:hidden" aria-controls='mobile-menu' aria-expanded='false'>
          <RiMenu3Line className='cursor-pointer text-white' size='1.5em' />
          {/* <CloseTwoToneIcon className='cursor-pointer text-white' /> */}
        </button>

        <ul className='ml-auto hidden md:flex'>
          <li className='gap-10 flex'>
            <NavLink to='/' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
              <span className='text-primary'>#</span> about
            </NavLink>
            <Link to='/m' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
              <span className='text-primary'>#</span> works
            </Link>
            <Link className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
              <span className='text-primary'>#</span> contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden h-screen glass top-0 absolute z-10 w-full">

        <div className=" gap-32 flex flex-col px-10 py-20 justify-between h-full bg-background w-[70vw] shadow-2xl">
          <ul className=''>
            <li className='gap-10 flex flex-col text-4xl'>
              <NavLink to='/' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
                <span className='text-primary'>#</span> about
              </NavLink>
              <Link to='/m' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
                <span className='text-primary'>#</span> works
              </Link>
              <Link className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
                <span className='text-primary'>#</span> contact
              </Link>
            </li>
          </ul>

          <div className='items-center'>
            <div className="flex flex-row gap-5 text-2xl justify-center">
              <a href='https://github.com/danielafriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsGithub size='1.5em' /></a>

              <a href='https://www.behance.net/danielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsBehance size='1.5em' /></a>

              <a href='https://www.linkedin.com/in/daniel-esuola/' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><ImLinkedin2 size='1.5em' /></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}