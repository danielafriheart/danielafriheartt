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

export default function About() {
  return (
    <section className='lg:h-screen h-full py-20 relative' data-scroll-section>
      <div className='text-white opacity-[2%] text-[10em] absolute right-20 top-20 text-right h2'>Skills</div>
      <img src={rectangle26} alt="rectangle26" className='right-0 absolute opacity-30' />
      <img src={rectangle25} alt="rectangle26" className='bottom-20 right-0 absolute opacity-30' />
      <img src={dots1} alt="rectangle26" className='bottom-1/2 absolute z-10 opacity-30' />
      <div className="grid md:grid-cols-2 h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
        <div data-scroll>
          <div className="flex flex-col gap-8">
            <span className='flex md:text-5xl text-3xl gap-3'>
              <h1 className='text-primary'>#</h1>
              <h2 className='text-white'>passionate <br /> creative <br /> developer</h2>
              <p className='bg-primary-100 w-full h-[1px] my-auto'></p>
            </span>
            <p className='text-gray md:w-[85%]'>
              I am constantly seeking out new challenges and opportunities to expand my knowledge and skills. With years of experience in creating visually stunning and functional products and web experiences,
            </p>
            <p className='text-gray md:w-[85%]'>
              Constantly seeking out ways to push the boundaries and explore new domains, including the world of art. I am driven by a passion for innovation and a desire to constantly improve my craft.
            </p>
          </div>
          {/* <button className='btn'>My Résumé <BsArrowRight className='' /></button> */}
        </div>

        <div className='h-full flex flex-col items-center md:py-0 pt-14' data-scroll>
          <div className="md:pl-20 lg:pl-20 sm:pl-0 mt-auto">
            <Skills />
          </div>
        </div>

      </div>
    </section>
  )
}