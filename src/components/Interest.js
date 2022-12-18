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
                <img src={bgDots} alt="" className='absolute md:bottom-20 bottom-52 md:left-20 md:opacity-100 opacity-30' />
                <div className="grid md:grid-cols-[1fr,2fr] h-full w-[80vw] mx-auto">
                    <div>
                        <div className="flex flex-col gap-8">
                            <span className='flex md:text-5xl text-3xl gap-3'>
                                <h1 className='text-primary'>#</h1>
                                <h2 className='text-white'>personal interests</h2>
                                <p className='bg-primary w-full h-[1px] my-auto'></p>
                            </span>
                            {/* Captions for personal interst tabs will be dynamic depending on what tab user clicks */}
                            {
                                tab === 1 &&
                                <p className='text-gray'>

                                    Most of my gaming time goes to FIFA. I often play Mortal Kombat, and a few others.
                                </p>
                            }
                            {
                                tab === 2 &&
                                <p className='text-gray'>

                                    Most of my Music time goes to FIFA. I often play Mortal Kombat, and a few others.
                                </p>
                            }
                            {
                                tab === 3 &&
                                <p className='text-gray'>

                                    Most of my gaming time goes to FIFA. I often play Mortal Kombat, and a few others.
                                </p>
                            }
                            {/*End of Captions for personal interst tabs will be dynamic depending on what tab user clicks */}


                            {/* Tabs navigation for setting personal interest */}
                            <ul className='flex gap-3 flex-col'>
                                <li>
                                    <button className={`${tab === 1 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-3xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(1)}>Gaming
                                    </button>
                                </li>

                                <li>
                                    <button className={`${tab === 2 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-3xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(2)}>Music
                                    </button>
                                </li>

                                <li>
                                    <button className={`${tab === 3 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-3xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(3)}>Art
                                    </button>
                                </li>
                            </ul>
                            {/* End of Tabs navigation for setting personal interest */}
                        </div>
                    </div>

                    {/* section rendering based on what user choose to display */}
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
