import React from 'react'
// Image =============================>>>>>>>>>>>>>
import heroImg from "../assets/img/heroImg.png";
// ===================================>>>>>>>>>>>>>


function Hero() {
    return (
        <>
            <div className='flex justify-center items-end bg-gray-100 relative lg:h-[100vh] h-full'>
                <div className="md:flex hidden rectangle h-full w-[20em] bg-primary-100 lg:right-[20em] md:right-[10em] sm:right-[3em] absolute z-10"></div>
                <div className=" w-[90vw] sm:w-[95vw] lg:w-[80vw] md:h-[70vh] lg:h-[70vh] sm:h-[75vh] mx-auto flex lg:items-end mt-[10em] md:mt-[10em] lg:mt-[5em] sm:mt-[5em]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 w-full z-30 bottom-0">
                        <div className="gap-8 lg:gap-8 sm:gap-2 flex flex-col">
                            <h1 className='text-6xl lg:text-6xl sm:text-4xl text-white'>Esuola Daniel,</h1>
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
                            <img src={heroImg} alt="heroImg" className='w-[40em] lg:w-[40em] sm:w-[20em] text-end right-0 ml-auto' />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero