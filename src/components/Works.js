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
            tool: ['JavaScript'],
            title: 'iWallet',
            description: 'FullStack Developer',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671314695/portfolioImages/iWallet_qiyklj.png',
            link: 'https://i-wallet.netlify.app/index.html'
        },
        {
            id: 2,
            type: 'web',
            tool: ['Bootstrap,', ' JavaScript'],
            title: 'Armahrah Foundation',
            description: 'Front End Developer',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671298710/portfolioImages/TAFro_14__-_1_ulldxc.png',
            link: 'https://github.com/danielafriheart/The-Armahra-Foundation'
        },
        {
            id: 3,
            type: 'web',
            tool: ['Open Weather Api,', ' ReactJS'],
            title: 'Weather Checker',
            description: 'Front End Developer',
            image: 'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1671313000/portfolioImages/weatherappchecker.netlify.app__gtydsw.png',
            link: 'https://weatherappchecker.netlify.app/'
        },
    ];

    const smallProjects = [
        {
            id: 1,
            title: 'pr1',
            tool: 'tool',
            link: '#'
        },
        {
            id: 2,
            title: 'pr1',
            tool: 'tool',
            link: '#'
        },
        {
            id: 3,
            title: 'pr1',
            tool: 'tool',
            link: '#'
        },
    ];


    return (
        <div className='py-20 relative'>
            <img src={bgDots} alt="bgDots" className='absolute z-[1]' />

            <div className="w-[80vw] mx-auto">
                <header>
                    <h1 className='text-white text-3xl'><span className='text-primary'>/</span> works</h1>
                    <p className='text-gray pt-3'>Selected projects</p>
                </header>

                <div className='my-10'>
                    <h1 className='text-white md:text-5xl text-3xl mb-10'><span className='text-primary'>#</span> select-project</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-5 px-0">
                        {
                            //Template
                            workList.map((workCard, i) => {
                                return (
                                    <div className='flex flex-col gap-2 md:mb-10 mb-5 hover:-translate-y-1 transition-all duration-300' key={i}>
                                        <img src={workCard.image} alt="img" />
                                        <p className='text-gray'>{workCard.tool}</p>
                                        <hr className='text-gray' />
                                        <h2 className='text-white text-2xl'>{workCard.title}</h2>
                                        <p className='text-gray'>description: {workCard.description}</p>
                                        <div className='flex'>
                                            <a href={workCard.link} rel='noreferrer noopener' target='_blank' className='btn'>{workCard.type === 'ui' ? 'Figma' : 'View project'}<BsArrowRight /></a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Small projects */}
                <div>
                    <h1 className='text-white md:text-5xl text-3xl mb-10'><span className='text-primary'>#</span> small-projects</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-5 px-0">
                        {
                            //Small Projects
                            smallProjects.map((small, i) => {
                                return (
                                    <div className='flex flex-col gap-2 md:mb-10 mb-5 hover:-translate-y-1 transition-all duration-300' key={i}>
                                        <p className='text-gray'>{small.tool}</p>
                                        <hr className='text-gray' />
                                        <h2 className='text-white text-2xl'>{small.title}</h2>
                                        <div className='flex'>
                                            <a href={small.link} rel='noreferrer noopener' target='_blank' className='btn'>{small.type === 'ui' ? 'Figma' : 'View project'}<BsArrowRight /></a>
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
