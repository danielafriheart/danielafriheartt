import React from 'react'
import { Link, NavLink } from "react-router-dom"
// Icons =============================>>>>>>>>>>>>>>>>>>>>>>>>>
import { RiMenu3Line } from 'react-icons/ri'
//===================================>>>>>>>>>>>>>>>>>>>>>>>>>>>


export default function Navbar() {



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
            <NavLink to='/' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> about</NavLink>
            <Link to='/m' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> works</Link>
            <Link className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}