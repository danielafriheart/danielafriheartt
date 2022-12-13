import React from 'react'

//Icons======>>>>>>>>>>>>>>>>>>>
// import { BsArrowRight } from 'react-icons/bs'
//=================>>>>>>>>>>>
//Images==============>>>>>>>>>>>>>>>>>
import bgDots from "../assets/img/bgDots.png";

export default function Interest() {
    return (
        <>
            <div className='md:h-[100vh] py-20 relative'>
                <img src={bgDots} alt=""  className='absolute bottom-0 md:left-20'/>
                <div className="grid md:grid-cols-2 h-full w-[80vw] mx-auto">
                    <div>
                        <div className="flex flex-col gap-8">
                            <span className='flex md:text-5xl text-3xl gap-3'>
                                <h1 className='text-primary'>#</h1>
                                <h2 className='text-white'>personal interests</h2>
                                <p className='bg-primary w-full h-[1px] my-auto'></p>
                            </span>

                            <p className='text-gray md:w-[85%]'>
                                Most of my gaming time goes to FIFA. I often play Mortal Kombat, and a few others.
                            </p>
                        </div>


                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}
