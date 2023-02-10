import React from 'react'
//Images =======================>>>>>>>>>
import rectangle26 from "../assets/img/rectangle26.png";
import rectangle25 from "../assets/img/rectangle25.png";
import bgDots from "../assets/img/bgDots.png";
import dots1 from "../assets/img/dots1.png";
//=============================>>>>>>>>>>>>

export default function Connect() {

    const cursor = document.querySelector('.cursor'); //Cursor
    const changeCursorCopy = () => {
        cursor.classList.add('changeCursorCopy')
    }
    const defaultCursor = () => {
        cursor.classList.remove('changeCursorCopy')
    }



    return (
        <section className='lg:h-[65vh] h-full py-20 relative' data-scroll-section>

            <img src={bgDots} alt="" className='absolute md:bottom-0 bottom-52 left-0 opacity-20 z-10' />
            <img src={rectangle26} alt="rectangle26" className='right-0 absolute opacity-20 z-10' />
            <img src={rectangle25} alt="rectangle26" className='bottom-20 right-0 absolute opacity-20 z-10' />
            <img src={dots1} alt="rectangle26" className='bottom-1/2 absolute z-10 opacity-20' />

            <div className="h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto z-20">

                <header className='flex md:text-5xl text-3xl gap-3'>

                    <h1 className='text-primary'
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="100"
                        data-aos-offset="0"
                    >
                        /
                    </h1>

                    <div className='flex gap-3'>
                        <h2 className='text-white w-full'
                            data-aos="fade-in"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-sine"
                        >
                            connect
                        </h2>

                        <h2 className='text-white w-full'
                            data-aos="fade-in"
                            data-aos-delay="250"
                            data-aos-easing="ease-in-sine"
                        >
                            with
                        </h2>

                        <h2 className='text-white w-full'
                            data-aos="fade-in"
                            data-aos-delay="300"
                            data-aos-easing="ease-in-sine"
                        >
                            me
                        </h2>

                    </div>

                    <p className='bg-primary-100 w-40 h-[1px] my-auto'
                        data-aos="fade-in"
                        data-aos-delay="800"
                        data-aos-easing="ease-in-sine"
                    ></p>
                </header>

                <div className="flex lg:flex-row flex-col lg:gap-20 mt-20 ">
                    <div className='h-full md:py-0 py-14 flex flex-col relative z-20'>

                        <a
                            href='mailto:esuoladaniel002@gmail.com'
                            className='text-[#A5A5A7] hover:text-[#fff] flex flex-col transition-all duration-300'
                            onMouseEnter={changeCursorCopy}
                            onMouseLeave={defaultCursor}
                        >
                            <span
                                className='underline transition-all duration-300 text-4xl lg:text-8xl sm:text-5xl h2 break-normal'
                                data-aos="fade-in"
                                data-aos-delay="300"
                                data-aos-easing="ease-in-sine"
                            >
                                esuoladaniel002
                            </span>
                            <span
                                className='underline transition-all duration-300 text-4xl lg:text-8xl sm:text-5xl h2'
                                data-aos="fade-in"
                                data-aos-delay="400"
                                data-aos-easing="ease-in-sine"
                            >
                                @gmail.com
                            </span>
                        </a>

                    </div>
                    <div>
                        <p className='text-gray'
                            data-aos="fade-in"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-sine"
                        >
                            I'm open to exploring freelance opportunities, but am also eager to hear about any other creative projects or inquiries you may have. 
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
