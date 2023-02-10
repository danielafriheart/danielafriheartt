import React from 'react'
import ControlledAccordions from './ControlledAccordions';

export default function Services() {

    //Recognitions & Awards =======================>>>>>>>>>>>>>>
    const awards = [
        {
            id: 1,
            year: 2023,
            platform: 'FreeCodeCamp',
            recognitionFor: 'JavaScript Algorithms & Data Structures'
        },
        {
            id: 2,
            year: 2022,
            platform: 'FreeCodeCamp',
            recognitionFor: 'Responsive Web Design'
        },
    ];
    //=============================================>>>>>>>>>>>>>>
    return (
        <>
            <section>
            </section>

            <section className='py-0 relative' data-scroll-section>
                <div className="h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
                    <header className='flex md:text-5xl text-3xl gap-3'>
                        <h1 className='text-primary'
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0"
                        >
                            02
                        </h1>

                        <div>
                            <h2 className='text-white w-full' data-scroll
                                data-aos="fade-in"
                                data-aos-delay="200"
                                data-aos-easing="ease-in-sine"
                            >
                                awards &
                            </h2>

                            <h2 className='text-white w-full' data-scroll
                                data-aos="fade-in"
                                data-aos-delay="300"
                                data-aos-easing="ease-in-sine"
                            >
                                recognitions
                            </h2>
                        </div>

                        <p className='bg-primary-100 w-1/2 ml-auto h-[1px] my-auto'
                            data-aos="fade-in"
                            data-aos-delay="300"
                            data-aos-easing="ease-in-sine"
                        ></p>
                    </header>

                    <div className="grid md:grid-cols-[20%,80%] ">
                        <div className=""></div>
                        <div className=" lg:mt-20 md:mt-20">
                            
                            <ControlledAccordions
                                accordionTitle={'Front End Development'}
                                accordionContent={'lorem'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
