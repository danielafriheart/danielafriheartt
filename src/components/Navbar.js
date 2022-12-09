import React from 'react'
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className='fixed w-screen'>
      <div className="w-[70%] pt-[2em] mx-auto flex ">

        <Link to='/' className='text-gray'>Danielafriheart</Link>
        <ul className='ml-auto'>
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