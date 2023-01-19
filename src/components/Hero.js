import React from 'react'
// Image =============================>>>>>>>>>>>>>
import heroImg from "../assets/img/heroImg.png";
// ===================================>>>>>>>>>>>>>


export default function Hero() {


    return (
        <section className='flex justify-center items-end bg-gray-100 relative lg:h-[100vh] md:h-[100vh] h-full'>

            <div className="md:flex hidden rectangle h-full w-[20em] bg-primary-100 lg:right-[20em] md:right-[10em] sm:right-[3em] absolute z-10"></div>
            <div className=" w-[90vw] sm:w-[95vw] lg:w-[80vw] md:h-[70vh] lg:h-[70vh] sm:h-[75vh] mx-auto flex lg:items-end mt-[10em] md:mt-[10em] lg:mt-[5em] sm:mt-[5em]">

                <div className="grid md:grid-cols-2 lg:grid-cols-2 w-full z-30 bottom-0">
                    <div className="gap-8 lg:gap-8 sm:gap-2 flex flex-col">

                        <h1 className='text-6xl lg:text-7xl sm:text-4xl text-white' id='split'
                            data-aos="fade-in"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-sine"
                        >
                            Esuola Daniel,
                        </h1>

                        <p className='text-gray'
                            data-aos="fade-in"
                            data-aos-delay="300"
                            data-aos-easing="ease-in-sine"
                        >
                            Software Developer at <a href="https://edozzier.com/" rel="noopener noreferrer" target='_blank' className='text-primary link relative'>Edozzier</a> and Product Designer✨
                        </p>

                        <p className='text-gray'
                            data-aos="fade-in"
                            data-aos-delay="400"
                            data-aos-easing="ease-in-sine"
                        >
                            I'm a wizard with code, conjuring up captivating product designs and crafting seamless web experiences. As a Software Developer, I specialize in frontend magic with React and have a touch of Angular in my arsenal. I strive to create inclusive and accessible apps that will blow your mind.
                        </p>

                        <p className='text-gray'
                            data-aos="fade-in"
                            data-aos-delay="500"
                            data-aos-easing="ease-in-sine"
                        >
                            Oh, and don't even get me started on my CSS skills – they're totally bewitching.
                        </p>
                    </div>
                    <div className="flex items-end"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <img src={heroImg} alt="heroImg" className='w-[40em] lg:w-[40em] sm:w-[20em] text-end right-0 ml-auto' />
                    </div>
                </div>
            </div>
        </section >
    )
}
