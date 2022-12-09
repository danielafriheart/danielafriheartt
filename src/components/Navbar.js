import React from 'react'
import { Link } from "react-router-dom"
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';


function Navbar() {
  return (
    <div className='fixed w-screen'>
      <div className="w-[70%] pt-[2em] mx-auto flex  ">

        <Link to='/' className='text-gray'>Danielafriheart</Link>

        {/* Hamburger */}
        <button className="hover:bg-gray-700 ml-auto lg:hidden sm:flex" aria-controls='mobile-menu' aria-expanded='false'>
          <MenuTwoToneIcon className='cursor-pointer' />
          <CloseTwoToneIcon className='cursor-pointer' />
        </button>

        <ul className='ml-auto sm:inset-auto sm:hidden lg:block'>
          <li className='gap-10 flex'>
            <Link className='font-light navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> about</Link>
            <Link className='font-light navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> works</Link>
            <Link className='font-light navLink relative hover:font-bold transition-all duration-300'><span className='text-primary'>#</span> contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar