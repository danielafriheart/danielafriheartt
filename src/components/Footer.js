import React from 'react'
// Icons =============================>>>>>>>>>>>>>>>>>>>>>>>>>
import { BsBehance } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
//===================================>>>>>>>>>>>>>>>>>>>>>>>>>>>

export default function Footer() {
  return (
    <div className='py-10'>
      <div className="w-[70vw] mx-auto text-center py-10 border-t border-primary-100 flex-col gap-8 flex">
        <h2 className='text-white md:text-3xl text-xl'>Connect with me ✨</h2>


        <div className='items-center'>
          <div className="flex flex-row gap-8 text-xl justify-center items-center">
            <a href='https://github.com/danielafriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsGithub size='1.5em' /></a>

            <a href='https://www.behance.net/danielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsBehance size='1.5em' /></a>

            <a href='https://www.linkedin.com/in/daniel-esuola/' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><ImLinkedin2 size='1.5em' /></a>
            <a href='https://twitter.com/DanielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><AiOutlineTwitter size='1.5em' /></a>
          </div>

        </div>
      </div>
    </div>
  )
}
