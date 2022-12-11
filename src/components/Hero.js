import React from 'react'
import SideNav from './SideNav';
// Image =============================>>>>>>>>>>>>>
import heroImg from "../assets/img/heroImg.png";
// ===================================>>>>>>>>>>>>>


function Hero() {
    return (
        <>
            <div className='flex justify-center items-end bg-gray-100 relative'>
                <div className="rectangle h-full w-[20em] bg-primary-100 lg:right-[20em] md:right-[10em] sm:right-[5em] absolute z-10"></div>
                <div className="w-[80vw] min-h-[100vh] mx-auto flex lg:items-end lg:mt-0 mt-[10em]">
                    <div className="grid md:grid-cols-2 w-full z-30  bottom-0">
                        <div className="gap-8 flex flex-col">
                            <h1 className='text-6xl text-white'>Esuola Daniel,</h1>
                            <p className='text-gray'>
                                Software Developer at <a href="https://edozzier.com/" rel="noopener noreferrer" target='_blank' className='text-primary link relative'>Edozzier</a> and Product Designer✨
                            </p>
                            <p className='text-gray'>
                                I'm a creative developer with years of experience in building products and appealing web experiences.
                            </p>
                            <p className='text-gray'>
                                As a Software Engineer, I focus majorly on the frontend side of applications, with professional experience in
                                React (and its frameworks) and basic experience with Angular.
                                I also love building accessible applications, and playing with CSS.
                            </p>
                        </div>
                        <div className="flex items-end">
                            <img src={heroImg} alt="heroImg" className='lg:w-[40em] text-end right-0 ml-auto' />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero