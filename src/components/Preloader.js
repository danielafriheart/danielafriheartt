import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import { BiCopyright } from "react-icons/bi";

export default function Preloader() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <section className='w-full h-screen lg:p-20 py-20 relative z-50 top-0 cursor-pointer bg-[#161616]'>
            <div className='text-[#fff] opacity-10 md:text-[10em] text-[2em] absolute md:right-20 right-5 bottom-0 text-right h2'>" A Journey  <br />of Creativity <br /> & Exploration. "</div>
            <div className=" w-[85vw] sm:w-[95vw] lg:w-[90vw] mx-auto h-full flex flex-col justify-between">
                <div>
                    <div className="h2 text-white text-3xl">
                        Daniel Esuola
                    </div>
                    <div className="h2 text-white text-3xl flex">
                        Portfolio <BiCopyright /> {year}
                    </div>
                </div>
                <div className='flex md:justify-start justify-center items-center'>
                    <HashLoader
                        color={'#CF95FC'}
                        size={250}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                <div className="h2 text-[#161616] text-right">
                    A journey of curiosity and exploration.
                </div>
            </div>
        </section>
    )
}
