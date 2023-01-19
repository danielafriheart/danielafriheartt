import React from 'react'
// Icons =============================>>>>>>>>>>>>>
import GitHubIcon from '@mui/icons-material/GitHub';
import { ImLinkedin2 } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
// ====================================>>>>>>>>>>>>>

function SideNav() {
    return (
        <div className='fixed z-40 flex-col items-center ml-8 pb-2 px-2 bg-background hidden lg:flex sm:hidden'>
            <div className='line bg-gray h-[15em] w-1 rounded-full mb-5'
                data-aos="fade-down"
                // data-aos-easing="linear"
                data-aos-delay="1500"
            ></div>

            <div className="flex flex-col gap-5">
                <a
                    href='https://github.com/danielafriheart'
                    target='_blank' rel='noopener noreferrer'
                    className='text-gray hover:text-white transition-all duration-300'
                    data-aos="fade-in"
                    data-aos-delay="1700"
                    data-aos-easing="ease-in-sine"  
                >
                    <GitHubIcon size='1.5em' />
                </a>

                <a
                    href='https://www.linkedin.com/in/daniel-esuola/'
                    target='_blank' rel='noopener noreferrer'
                    className='text-gray hover:text-white transition-all duration-300'
                    data-aos="fade-in"
                    data-aos-delay="1800"
                    data-aos-easing="ease-in-sine"
                >
                    <ImLinkedin2 size='1.5em' />
                </a>

                <a
                    href='https://twitter.com/DanielAfriheart'
                    target='_blank' rel='noopener noreferrer'
                    className='text-gray hover:text-white transition-all duration-300'
                    data-aos="fade-in"
                    data-aos-delay="1900"
                    data-aos-easing="ease-in-sine"
                >
                    <AiOutlineTwitter size='1.5em' />
                </a>
            </div>

        </div>
    )
}

export default SideNav