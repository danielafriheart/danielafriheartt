import React from 'react'
//Icons =======================>>>>>>>>>
//=============================>>>>>>>>>
//Images =======================>>>>>>>>>
import rectangle26 from "../assets/img/rectangle26.png";
import rectangle25 from "../assets/img/rectangle25.png";
import bgDots from "../assets/img/bgDots.png";
import dots1 from "../assets/img/dots1.png";
//=============================>>>>>>>>>>>>

export default function Connect() {

    return (
            <section className='lg:h-[65vh] h-full py-20 relative' data-scroll-section>
                <img src={bgDots} alt="" className='absolute md:bottom-0 bottom-52 md:left-32 opacity-20 z-10' />
                <img src={rectangle26} alt="rectangle26" className='right-0 absolute opacity-20 z-10' />
                <img src={rectangle25} alt="rectangle26" className='bottom-20 right-0 absolute opacity-20 z-10' />
                <img src={dots1} alt="rectangle26" className='bottom-1/2 absolute z-10 opacity-20' />
                <div className="h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto z-20">
                    <header className='flex md:text-5xl text-3xl gap-3'>
                        <h1 className='text-primary'>/</h1>
                        <h2 className='text-white w-full' id='split'>connect with me ✨</h2>
                        <p className='bg-primary-100 w-40 h-[1px] my-auto'></p>
                    </header>
                    <div className="grid md:grid-cols-[1fr,2fr] mt-20 ">
                        <div>
                            <p className='text-gray'>
                                I am open to exploring freelance opportunities, but am also eager to hear about any other creative projects or inquiries you may have. Please feel free to reach out to me with any questions or ideas.
                            </p>
                        </div>

                        <div className='h-full md:py-0 py-14 flex flex-col'>
                            <a href='mailto:esuoladaniel002@gmail.com' target="_blank" rel='noopener noreferrer' type='email' className='text-white opacity-60 hover:opacity-80 underline transition-all duration-300 text-5xl lg:text-8xl sm:text-5xl text-right h2'>hello@daniel <br /> esuola.com</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}
