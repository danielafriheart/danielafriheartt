import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
// Icons =============================>>>>>>>>>>>>>>>>>>>>>>>>>
import { CgMenuRight } from 'react-icons/cg'
import { BsBehance } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
//===================================>>>>>>>>>>>>>>>>>>>>>>>>>>>


export default function Navbar() {

  //Mobile Navigation Toggler=================>>>>>>>>
  const [open, setOpen] = useState(false);

  const handleNavOpen = () => {
    setOpen(true);
    // console.log(open);
  };

  const handleNavClose = () => {
    setOpen(false);
    // console.log(open);
  };
  //Mobile Navigation Toggler=================>>>>>>>>



  return (
    <div className='fixed w-screen z-50' data-scroll-section>
      <div className="w-[90vw] lg:w-[80vw] sm:w-[95vw] pt-[2em] mx-auto flex">
        <Link to='/' className='text-white font-bold'>D a n i e l.</Link>

        <button className="ml-auto md:hidden " aria-controls='mobile-menu' aria-expanded='false'>
          <CgMenuRight className={`${open === false ? 'flex' : 'hidden'} cursor-pointer text-white`} size='1.5em' onClick={handleNavOpen} />
        </button>

        <ul className='ml-auto hidden md:flex'>
          <li className='gap-10 flex'>
            <NavLink activeclassname='active' to='/' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
              <span className='text-primary'>#</span> about
            </NavLink>
            <NavLink activeclassname='active' to='/works' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
              <span className='text-primary'>#</span> works
            </NavLink>
            <NavLink activeclassname='active' to='/contact' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'>
              <span className='text-primary'>#</span> contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div onClick={handleNavClose} className={`${open === true ? 'flex' : 'hidden'} h-screen glass top-0 absolute z-10 w-full md:hidden transition-all duration-300`}>
        <div className=" gap-32 flex flex-col px-10 py-20 justify-between h-full bg-background w-[70vw] shadow-2xl">
          <ul className=''>
            <li className='gap-10 flex flex-col text-4xl'>
              <NavLink activeclassname='active' to='/' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300' onClick={handleNavClose}>
                <span className='text-primary'>#</span> about
              </NavLink>
              <NavLink activeclassname='active' to='/works' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300' onClick={handleNavClose}>
                <span className='text-primary'>#</span> works
              </NavLink>
              <NavLink activeclassname='active' to='/contact' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300' onClick={handleNavClose}>
                <span className='text-primary'>#</span> contact
              </NavLink>
            </li>
          </ul>

          <div className='items-center'>
            <div className="flex flex-col gap-8 md:text-2xl text-xl justify-center items-end">
              <a href='https://github.com/danielafriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsGithub size='1.5em' /><p></p></a>

              <a href='https://www.behance.net/danielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsBehance size='1.5em' /></a>

              <a href='https://www.linkedin.com/in/daniel-esuola/' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><ImLinkedin2 size='1.5em' /></a>

              <a href='https://twitter.com/DanielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><AiOutlineTwitter size='1.5em' /></a>
            </div>
          </div>
        </div>
        <div className="">
          <button className="ml-auto md:hidden absolute right-0 mt-[2em] mr-[6%]" aria-controls='mobile-menu' aria-expanded='false'>
            <AiOutlineClose className={`${open === true ? 'flex' : 'hidden'} cursor-pointer text-white`} size='1.5em' onClick={handleNavClose} />
          </button>
        </div>
      </div>
    </div>
  )
}