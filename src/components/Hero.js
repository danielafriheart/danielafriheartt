import React from 'react'
// Image =============================>>>>>>>>>>>>>
import heroImg from "../assets/img/heroImg.png";
// ===================================>>>>>>>>>>>>>


export default function Hero() {

    return (
        <>
            <div className='flex justify-center items-end bg-gray-100 relative lg:h-[100vh] h-full'>
                <div className='text-white opacity-[3%] text-[10em] absolute right-20 top-0 text-right h2 z-20 hidden md:flex lg:flex'>Daniel <br />Afriheart</div>

                <div className="md:flex hidden rectangle h-full w-[20em] bg-primary-100 lg:right-[20em] md:right-[10em] sm:right-[3em] absolute z-10"></div>
                <div className=" w-[90vw] sm:w-[95vw] lg:w-[80vw] md:h-[70vh] lg:h-[70vh] sm:h-[75vh] mx-auto flex lg:items-end mt-[10em] md:mt-[10em] lg:mt-[5em] sm:mt-[5em]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 w-full z-30 bottom-0">
                        <div className="gap-8 lg:gap-8 sm:gap-2 flex flex-col">
                            <h1 className='text-6xl lg:text-7xl sm:text-4xl text-white' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration="1500">Esuola Daniel,</h1>
                            <p className='text-gray'>
                                Software Developer at <a href="https://edozzier.com/" rel="noopener noreferrer" target='_blank' className='text-primary link relative'>Edozzier</a> and Product Designer✨
                            </p>
                            <p className='text-gray'>
                                I'm a wizard with code, conjuring up captivating product designs and crafting seamless web experiences. As a Software Developer, I specialize in frontend magic with React and have a touch of Angular in my arsenal. I strive to create inclusive and accessible apps that will blow your mind.
                            </p>
                            <p className='text-gray'>
                                Oh, and don't even get me started on my CSS skills – they're totally bewitching.
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
