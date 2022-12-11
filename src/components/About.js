import React from 'react'

//Icons =======================>>>>>>>>>
import { BsArrowRight } from 'react-icons/bs'
import Skills from './Skills'
//=============================>>>>>>>>>>>>
//Images =======================>>>>>>>>>
import rectangle26 from "../assets/img/rectangle26.png";
import rectangle25 from "../assets/img/rectangle25.png";
import dots1 from "../assets/img/dots1.png";
//=============================>>>>>>>>>>>>

function About() {
  return (
    <div className='md:h-[70vh] py-20 relative'>
      <img src={rectangle26} alt="rectangle26" className='right-0 absolute' />
      <img src={rectangle25} alt="rectangle26" className='bottom-20 right-0 absolute' />
      <img src={dots1} alt="rectangle26" className='bottom-1/2 absolute z-10' />
      <div className="grid md:grid-cols-2 h-full w-[80vw] mx-auto">
        <div>
          <div className="flex flex-col gap-8">

            <span className='flex md:text-5xl text-3xl gap-3'>
              <h1 className='text-primary'>#</h1>
              <h2 className='text-white'>passionate <br /> creative <br /> developer</h2>
              <p className='bg-primary w-full h-[1px] my-auto'></p>
            </span>

            <p className='text-gray md:w-[85%]'>
              I’m a developer based in <span className='text-primary link relative cursor-pointer'>Lagos, Nigeria</span>  with years of
              experience in building products and appealing web
              experiences
            </p>

            <p className='text-gray md:w-[85%]'>
              Each project is an opportunity to learn new concepts
              across multiple domains including arts,
            </p>
          </div>

          <button className='btn'>Read More <BsArrowRight className='text-white' /></button>

        </div>
        
        <div className='h-full flex items-center md:py-0 py-14'>
          <div className="md:pl-8">
            <Skills />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About