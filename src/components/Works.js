import React from 'react'
//images==============>>>>>>>>>>
import bgDots from "../assets/img/dots.png";
//====================>>>>>>>>>
import { BsArrowRight } from "react-icons/bs";


export default function Works() {

    //workCard===============>>>>>>>>>>>>>
    const workList = [
        {
            id: 1,
            type: 'web',
            tool: ['ReactJS,', ' TailwindCSS,', ' ThreeJS'],
            title: 'Portfolio',
            description: 'You\'re using it rn :)',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671366746/portfolioImages/portfolio_zgy8kb.png',
            link: 'disabled'
        },
        {
            id: 2,
            type: 'web',
            tool: ['Figma'],
            title: 'Hempire',
            description: 'Merch design for clothing company',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671299846/portfolioImages/image_2_oml4ev.png',
            link: 'https://www.behance.net/gallery/157379639/Hempire-Brand-Logo'
        },
        {
            id: 3,
            type: 'web',
            tool: ['Figma'],
            title: 'PayBuddy',
            description: 'Logo Design and case study',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671304408/portfolioImages/paybuddy_anbwm0.png',
            link: 'https://www.behance.net/gallery/151902997/PayBuddy-Brand-Positioning-Visual-Identity'
        },
        {
            id: 4,
            type: 'web',
            tool: ['JavaScript'],
            title: 'iWallet',
            description: 'iWallet is a Financial Technology web application',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1673863542/portfolioImages/iWallet_hwicf0.png',
            link: 'https://i-wallet.netlify.app/index.html'
        },
        {
            id: 5,
            type: 'web',
            tool: ['Bootstrap,', ' JavaScript'],
            title: 'Armahrah Foundation',
            description: 'Front End Engineer',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671298710/portfolioImages/TAFro_14__-_1_ulldxc.png',
            link: 'disabled'
        },
        {
            id: 6,
            type: 'web',
            tool: ['Open Weather Api,', ' ReactJS'],
            title: 'Checker',
            description: 'Uses open Weather Api to check weather conditions of anywhere around the world.',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671313000/portfolioImages/weatherappchecker.netlify.app__gtydsw.png',
            link: 'https://weatherappchecker.netlify.app/'
        },
    ];

    return (
        <div className='py-20 relative' data-scroll-section>
            <img src={bgDots} alt="bgDots" className='absolute z-10 opacity-20 top-80' />

            <div className=" w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
                <header>
                    <h1 className='text-white text-3xl'
                        data-aos="fade-in"
                        data-aos-delay="500"
                        data-aos-easing="ease-in-sine"
                    >
                        <span className='text-primary'>/</span> works
                    </h1>

                    <p className='text-gray pt-3 md:w-[48%]'
                        data-aos="fade-in"
                        data-aos-delay="600"
                        data-aos-easing="ease-in-sine"
                    >
                        A selected set of projects I’ve built with individuals and teams (the ones I can share).
                    </p>
                </header>


                <div className='flex md:text-5xl text-3xl gap-3 my-10'>
                    <h1 className='text-primary'
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="700"
                        data-aos-offset="0"
                    >
                        #
                    </h1>

                    <div className='flex gap-3'>
                        <h2 className='text-white'
                            data-aos="fade-in"
                            data-aos-delay="800"
                            data-aos-easing="ease-in-sine"
                        >
                            selected
                        </h2>

                        <h2 className='text-white'
                            data-aos="fade-in"
                            data-aos-delay="900"
                            data-aos-easing="ease-in-sine"
                        >
                            projects
                        </h2>
                    </div>
                </div>

                <div className=''>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-5 px-0"
                        data-aos="fade-up"
                        data-aos-="1000"
                        data-aos-easing="ease-in-sine"
                    >
                        {
                            //Template
                            workList.map((workCard, i) => {
                                return (
                                    workCard.link === 'disabled' ?
                                        <div className='flex flex-col gap-2 md:mb-10 mb-5 hover:-translate-y-1 transition-all duration-300' key={i}>
                                            <img src={workCard.image} alt="img" />
                                            <p className='text-gray'>{workCard.tool}</p>
                                            <hr className='text-gray' />
                                            <h2 className='text-white text-2xl'>{workCard.title}</h2>
                                            <p className='text-gray'>{workCard.description}</p>
                                            <div className='flex'>
                                                <button className='disabledBtn'>{workCard.type === 'ui' ? 'Figma' : 'View project'}<BsArrowRight /></button>
                                            </div>
                                        </div>
                                        : //else
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
        </div >
    )
}
