import React from 'react'
//Icons =======================>>>>>>>>>
//=============================>>>>>>>>>>>>
//Images =======================>>>>>>>>>
import rectangle26 from "../assets/img/rectangle26.png";
import rectangle25 from "../assets/img/rectangle25.png";
import dots1 from "../assets/img/dots1.png";
import { TextField } from '@mui/material';
//=============================>>>>>>>>>>>>

export default function Connect() {
    return (
        <>
            <div className='md:h-[65vh] py-20 relative'>
                <img src={rectangle26} alt="rectangle26" className='right-0 absolute' />
                <img src={rectangle25} alt="rectangle26" className='bottom-20 right-0 absolute' />
                <img src={dots1} alt="rectangle26" className='bottom-1/2 absolute z-10' />

                <div className="grid md:grid-cols-2 h-full w-[80vw] mx-auto md:gap-5">
                    <div>
                        <div className="flex flex-col gap-8">
                            <span className='flex md:text-5xl text-3xl gap-3'>
                                <h1 className='text-primary'>/</h1>
                                <h2 className='text-white'>connect with me</h2>
                            </span>

                            <p className='text-gray md:w-[85%]'>
                                Who I am
                            </p>
                            <p className='text-gray md:w-[85%]'>
                                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                            </p>
                        </div>
                    </div>

                    <div className='h-full md:py-0 py-14 flex flex-col'>
                        <form action="#" className='text-white gap-5 flex flex-col mt-auto'>
                            <span className="flex gap-5">
                                <TextField variant='outlined' id="outlined-required" label="Name" className='w-1/2' />
                                <TextField variant='outlined' id="outlined-required" label="Email" className='w-1/2' />
                            </span>
                            <TextField variant='outlined' id="outlined-required" label="Title" fullWidth />
                            <TextField variant='outlined' id="outlined-required" label="Title" fullWidth />
                        </form>
                        <div className="">
                            <button className='btn'>send</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
