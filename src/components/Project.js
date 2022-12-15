import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";

function Project() {
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
                    <div className="text-white">
                        <div className="flex">
                            <NavLink to='/works' className='ml-auto hover:font-bold transition-all duration-300 flex items-center gap-3'>View all <BsArrowRight /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project