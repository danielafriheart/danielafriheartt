import React from 'react'
import ControlledAccordions from './ControlledAccordions';

export default function Services() {

    //Recognitions & Awards =======================>>>>>>>>>>>>>>
    const service = [
        {
            id: 1,
            title: 'Front end development / engineering',
            content: 'I specialize in scalable front-end web application development, including planning, design, build, testing and maintenance..'
        },
        {
            id: 2,
            title: 'Intercation design / animation',
            content: 'I collaborate with designers to execute web app and design system animations and interactions.'
        },
        {
            id: 3,
            title: 'Creative implementation',
            content: 'I design optimized layouts and interactions for performance and usability.'
        },
    ];
    //=============================================>>>>>>>>>>>>>>
    return (

        <section className='pb-10 relative' data-scroll-section>
            <div className="h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
                <header className='flex md:text-5xl text-3xl gap-3'>
                    <h1 className='text-primary'
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="100"
                        data-aos-offset="0"
                    >
                        04
                    </h1>

                    <div>
                        <h2 className='text-white w-full' data-scroll
                            data-aos="fade-in"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-sine"
                        >
                            Services
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
                    <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-easing="ease-in-sine"
                        className=" mt-20"
                    >
                        {
                            service.map((services, i) => {
                                return (
                                    <ControlledAccordions
                                        id={services.id}
                                        key={i}
                                        accordionTitle={services.title}
                                        accordionContent={services.content}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}
