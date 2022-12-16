
import React, { useState } from 'react'
//Images==============>>>>>>>>>>>>>>>>>
import bgDots from "../assets/img/bgDots.png";

export default function Interest() {

    //Tab=================>>>>>>>>>>>
    const [tab, setNewTab] = useState(1);
    //====================>>>>>>>>>>>


    return (
        <>
            <div className='md:h-[100vh] py-20 relative'>
                <img src={bgDots} alt="" className='absolute md:bottom-20 bottom-52 md:left-20 ' />
                <div className="grid md:grid-cols-[1fr,2fr] h-full w-[80vw] mx-auto">
                    <div>
                        <div className="flex flex-col gap-8">
                            <span className='flex md:text-5xl text-3xl gap-3'>
                                <h1 className='text-primary'>#</h1>
                                <h2 className='text-white'>personal interests</h2>
                                <p className='bg-primary w-full h-[1px] my-auto'></p>
                            </span>
                            <p className='text-gray'>
                                Most of my gaming time goes to FIFA. I often play Mortal Kombat, and a few others.
                            </p>

                            {/* Tabs navigation for setting personal interest */}
                            <ul className='flex gap-3 flex-col'>
                                <li>
                                    <button className={`${tab === 1 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-3xl text-xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(1)}>Gaming
                                    </button>
                                </li>

                                <li>
                                    <button className={`${tab === 2 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-3xl text-xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(2)}>Music
                                    </button>
                                </li>

                                <li>
                                    <button className={`${tab === 3 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-3xl text-xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(3)}>Art
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Tab navigation rendering these based on what you cjoose to display */}
                    <div className="text-white p-5">
                        {
                            tab === 1 &&
                            <div>
                                This is gaming
                            </div>
                        }
                        {
                            tab === 2 &&
                            <div>
                                This is Music
                            </div>
                        }
                        {
                            tab === 3 &&
                            <div>
                                This is Art
                            </div>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
