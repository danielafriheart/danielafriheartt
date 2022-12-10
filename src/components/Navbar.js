import React from 'react'
import { Link, NavLink } from "react-router-dom"
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { ListItemButton } from '@mui/material';


function Navbar() {
  return (
    <div className='fixed w-screen z-50'>
      <div className="w-[80%] pt-[2em] mx-auto flex  ">

        <Link to='/' className='text-gray'>Danielafriheart</Link>

        {/* Hamburger */}
        <button className="hover:bg-gray-700 ml-auto lg:hidden sm:flex" aria-controls='mobile-menu' aria-expanded='false'>
          <MenuTwoToneIcon className='cursor-pointer' />
          <CloseTwoToneIcon className='cursor-pointer' />
        </button>

        <ul className='ml-auto sm:inset-auto sm:hidden lg:block'>
          <li className='gap-10 flex'>
            <NavLink to='/about' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> about</NavLink>
            <Link to='/m' className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> works</Link>
            <Link className='font-light text-gray hover:text-white navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar