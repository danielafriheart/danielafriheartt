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
            tool: 'Figma',
            title: 'iWallet',
            role: 'Front End Developer',
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
        },
        {
            id: 3,
            tool: 'Figma',
            title: 'payBuddy',
            role: 'Front End Developer',
            image: 'https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            link: '#'
        }
    ]

    return (
        <div className='py-20 relative'>
            <img src={bgDots} alt="bgDots" className='absolute z-[1]' />

            <div className="w-[80vw] mx-auto">
                <header>
                    <h1 className='text-white text-3xl'><span className='text-primary'>/</span> works</h1>
                    <p className='text-gray pt-3'>Selected projects</p>
                </header>

                <div className='my-10'>
                    <h1 className='text-white md:text-5xl mb-10'><span className='text-primary'>#</span> select-project</h1>
                    <div className="grid md:grid-cols-3 gap-5">
                        {
                            //Template
                            workList.map((workCard, i) => {
                                return (
                                    <div className='flex flex-col gap-2 md:mb-10 hover:-translate-y-1 transition-all duration-300' key={i}>
                                        <img src={workCard.image} alt="img" />
                                        <p className='text-gray'>{workCard.tool}</p>
                                        <hr className='text-gray' />
                                        <h2 className='text-white text-2xl'>{workCard.title}</h2>
                                        <p className='text-gray'>Role: {workCard.role}</p>
                                        <div className='flex'>
                                            <a href={workCard.link} rel='noreferrer noopener' className='btn'>View Project <BsArrowRight /></a>
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