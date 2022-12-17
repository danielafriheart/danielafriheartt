import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";

function Project() {

    //workCard===============>>>>>>>>>>>>>
    const workList = [
        {
            id: 1,
            tool: 'Figma',
            title: 'iWallet',
            role: 'Front End Developer',
            // image: { require('../assets/img/projectImg/payBuddy.png') },
            image: 'https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            link: '#'
        },
        {
            id: 2,
            tool: 'Bootstrap',
            title: 'payBuddy',
            role: 'Front End Developer',
            image: 'https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            link: '#'
        }
    ]

    return (
        <div>
            <div className='md:h-[100vh] py-20 relative'>
                <div className="grid md:grid-cols-[1fr,2fr] h-full w-[80vw] mx-auto">
                    <div>
                        <div className="flex flex-col gap-8">
                            <header className='flex md:text-5xl text-3xl gap-3'>
                                <h1 className='text-primary'>#</h1>
                                <h2 className='text-white'>projects</h2>
                                <p className='bg-primary w-full h-[1px] my-auto'></p>
                            </header>
                            <p className='text-gray'>
                                A selected set of projects I’ve
                                built with individuals and teams.
                            </p>
                            <p className='text-gray'>
                                This is a mix of personal,
                                collaborative and client owned
                                projects.
                            </p>
                        </div>
                    </div>
                    <div className="text-white flex flex-col justify-between">
                        <div className="flex">
                            <NavLink to='/works' className='ml-auto flex text-gray hover:text-white hover:font-bold transition-all duration-300flex items-center gap-3'>View all <BsArrowRight /></NavLink>
                        </div>
                        <div className="p-5 grid md:grid-cols-2 gap-5">
                            {
                                workList.map((workCard, i) => {
                                    return (
                                        <div className='flex flex-col gap-2 md:mb-10 hover:-translate-y-1 transition-all duration-300' key={i}>
                                            <img src={workCard.image} alt="img" />
                                            <p className='text-gray'>{workCard.tool}</p>
                                            <hr className='text-gray' />
                                            <h2 className='text-white text-2xl'>{workCard.title}</h2>
                                            <p className='text-gray'>Role: {workCard.role}</p>
                                            <div className='flex'>
                                                <a href={workCard.link} rel='noreferrer noopener' className='btn'>View project <BsArrowRight /></a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project