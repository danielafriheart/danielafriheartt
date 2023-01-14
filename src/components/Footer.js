import React from 'react'
// Icons =============================>>>>>>>>>>>>>>>>>>>>>>>>>
import { BsBehance } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { RxInstagramLogo } from 'react-icons/rx';
// import { SlSocialSpotify } from 'react-icons/sl';
//===================================>>>>>>>>>>>>>>>>>>>>>>>>>>>
import bgDots from '../assets/img/dots1.png'

export default function Footer() {
  return (
    <div className='py-10 relative' data-scroll-section>
      <img src={bgDots} alt="bgDot" className='absolute -z-10 bottom-20 opacity-20' />
      <div className="w-[70vw] mx-auto text-center py-10 border-t border-primary-100 flex-col gap-5 flex">
        <h2 className='text-white md:text-3xl text-2xl'>all-socials ✨</h2>
        <div className='items-center'>
          <div className="flex flex-row gap-8 md:text-xl justify-center items-center">
            <a href='https://github.com/danielafriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsGithub size='1.5em' /></a>

            <a href='https://www.behance.net/danielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsBehance size='1.5em' /></a>

            <a href='https://www.linkedin.com/in/daniel-esuola/' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><ImLinkedin2 size='1.5em' /></a>
            <a href='https://twitter.com/DanielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><AiOutlineTwitter size='1.5em' /></a>
            <a href='https://www.instagram.com/danielafriheart/' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><RxInstagramLogo size='1.5em' /></a>

          </div>
        </div>
        <p className='text-[1em] text-gray'>Designed & Developed by Esuola Daniel</p>
      </div>
    </div>
  )
}
