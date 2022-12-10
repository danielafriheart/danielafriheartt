import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../assets/img/heroImg.png";

function Hero() {
    return (
        <div className='h-[100vh] flex justify-center items-end bg-gray-100'>
            <div className="w-[80%] h-[100%] mx-auto flex items-end relative">
                <div className="rectangle h-[34.125em] w-[17em] bg-primary-100 top-0 right-20 absolute z-10"></div>
                <div className="grid grid-cols-2 w-full h-[70%] z-30">
                    <div className="gap-8 flex flex-col">
                        <h1 className='text-6xl'>Esuola Daniel,</h1>
                        <p className='text-gray'>
                            Software Developer at <Link to='#' className='text-primary'>Edozzier</Link> and Product Designer✨
                        </p>
                        <p className='text-gray'>
                            I'm a creative developer with years of experience in building products and appealing web experiences.
                        </p>
                        <p className='text-gray'>
                            As a Software Engineer, I focus majorly on the frontend side of applications, with professional experience in React (and its frameworks) and basic experience with Angular. I also love building accessible applications, and playing with CSS.
                        </p>
                    </div>
                    <div className="relative">
                        <img src={heroImg} alt="heroImg" className='w-[90%] absolute right-0 bottom-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero