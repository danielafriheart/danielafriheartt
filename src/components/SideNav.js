import React from 'react'
// Icons =============================>>>>>>>>>>>>>
import GitHubIcon from '@mui/icons-material/GitHub';
import { BsBehance } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
// ====================================>>>>>>>>>>>>>

function SideNav() {
    return (
        <div className='fixed z-40 flex-col items-center ml-8 pb-2 px-2 bg-background hidden md:flex'>
            <p className='line bg-gray h-[15em] w-1 rounded-full mb-5'></p>
            <div className="flex flex-col gap-5">
                <a href='https://github.com/danielafriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><GitHubIcon size='1.5em' /></a>

                <a href='https://www.behance.net/danielAfriheart' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><BsBehance size='1.5em' /></a>

                <a href='https://www.linkedin.com/in/daniel-esuola/' target='_blank' rel='noopener noreferrer' className='text-gray hover:text-white transition-all duration-300'><ImLinkedin2 size='1.5em' /></a>
            </div>

        </div>
    )
}

export default SideNav