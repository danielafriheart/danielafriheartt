import React from 'react'
// Icons =============================>>>>>>>>>>>>>
import GitHubIcon from '@mui/icons-material/GitHub';
import { BsBehance } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
// ====================================>>>>>>>>>>>>>

function SideNav() {
    return (
        <div className='fixed z-40 flex-col items-center ml-8 pb-2 px-2 bg-background hidden lg:flex sm:hidden'>
            <div className='line bg-gray h-[15em] w-1 rounded-full mb-5'></div>
            <div className="flex flex-col gap-5">
                <a href='https://github.com/danielafriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><GitHubIcon size='1.5em' /></a>

                <a href='https://www.behance.net/danielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsBehance size='1.5em' /></a>

                <a href='https://www.linkedin.com/in/daniel-esuola/' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><ImLinkedin2 size='1.5em' /></a>

                <a href='https://twitter.com/DanielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><AiOutlineTwitter size='1.5em' /></a>
            </div>

        </div>
    )
}

export default SideNav