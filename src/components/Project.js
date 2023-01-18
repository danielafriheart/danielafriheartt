import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import bgDots from '../assets/img/dots.png'

function Project() {

    //workCard===============>>>>>>>>>>>>>
    const workList = [
        {
            id: 1,
            type: 'web',
            tool: ['JavaScript'],
            title: 'iWallet',
            description: 'iWallet is a Financial Technology web application',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1673863542/portfolioImages/iWallet_hwicf0.png',
            link: 'https://i-wallet.netlify.app/index.html'
        },
        {
            id: 2,
            type: 'web',
            tool: ['Open Weather Api,', ' ReactJS'],
            title: 'Checker',
            description: 'Uses open Weather Api to check weather conditions of anywhere around the world.',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671313000/portfolioImages/weatherappchecker.netlify.app__gtydsw.png',
            link: 'https://weatherappchecker.netlify.app/'
        },
    ]

    return (
        <>
            <section className='lg:h-[100vh] h-full py-20 relative' data-scroll-section>
                {/* <div className='text-white opacity-[2%] text-[10em] absolute md:left-20 hidden md:flex top-0 text-right h2'>Selected <br /> Projects</div> */}

                <img src={bgDots} alt="bgDot" className='absolute -z-10 right-0 bottom-1/2 opacity-30' />
                <div className="grid md:grid-cols-[1fr,2fr] h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
                    <div>
                        <div className="flex flex-col gap-8">
                            <header className='flex md:text-5xl text-3xl gap-3'>

                                <h1 className='text-primary'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="100"
                                    data-aos-offset="0"
                                >
                                    04
                                </h1>

                                <h2 className='text-white'
                                    data-aos="fade-in"
                                    data-aos-delay="200"
                                    data-aos-easing="ease-in-sine"
                                >
                                    projects
                                </h2>

                                <p className='bg-primary-100 w-full h-[1px] my-auto'
                                    data-aos="fade-in"
                                    data-aos-delay="800"
                                    data-aos-easing="ease-in-sine"
                                ></p>
                            </header>
                            <p className='text-gray'
                                data-aos="fade-in"
                                data-aos-delay="300"
                                data-aos-easing="ease-in-sine"
                            >
                                Here are some of my most noteworthy endeavors, where I've had the pleasure of working with a diverse range of talented individuals and teams.
                            </p>
                            <p className='text-gray'
                                data-aos="fade-in"
                                data-aos-delay="400"
                                data-aos-easing="ease-in-sine"
                            >
                                These projects range from personal endeavors to collaborations with clients.
                            </p>
                        </div>
                    </div>
                    <div className="text-white flex flex-col justify-between">

                        <div className="flex">
                            <NavLink
                                to='/works'
                                className='ml-auto flex text-gray hover:text-white hover:font-bold transition-all duration-300flex items-center gap-3'
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                View all <BsArrowRight />
                            </NavLink>
                        </div>

                        <div className="p-5 place-content-end grid md:grid-cols-2 gap-5 md:px-5 px-0"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                        >
                            {
                                workList.map((workCard, i) => {
                                    return (
                                        <div className='flex flex-col gap-2 md:mb-10 mb-5 hover:-translate-y-1 transition-all duration-300' key={i}>
                                            <img src={workCard.image} alt="img" />
                                            <p className='text-gray'>{workCard.tool}</p>
                                            <hr className='text-gray' />
                                            <h2 className='text-white text-2xl'>{workCard.title}</h2>
                                            <p className='text-gray'>{workCard.description}</p>
                                            <div className='flex'>
                                                <a href={workCard.link} rel='noreferrer noopener' target='_blank' className='btn'>{workCard.type === 'ui' ? 'Figma' : 'View project'}<BsArrowRight /></a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project