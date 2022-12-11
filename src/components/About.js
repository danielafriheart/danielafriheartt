import React from 'react'

//Icons =======================>>>>>>>>>
import { BsArrowRight } from 'react-icons/bs'
//=============================>>>>>>>>>>>>

function About() {
  return (
    <div className='h-[100vh] py-20'>
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
        <div className="">

        </div>
      </div>
    </div>
  )
}

export default About