import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react'
//Images==============>>>>>>>>>>>>>>>>>
import bgDots from "../assets/img/bgDots.png";
import { Vr } from './Vr';


export default function Interest() {

    //Tab=================>>>>>>>>>>>
    const [tab, setNewTab] = useState(1);
    //====================>>>>>>>>>>>


    return (
        <>
            <div className='lg:h-[85vh] h-full py-20 relative'>
                <img src={bgDots} alt="" className='absolute md:bottom-0 bottom-52 md:left-20 opacity-20' />
                <div className="grid md:grid-cols-[1fr,2fr] h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
                    <div>
                        <div className="flex flex-col gap-8">
                            <span className='flex md:text-5xl text-3xl gap-3'>
                                <h1 className='text-primary'>#</h1>
                                <h2 className='text-white'>personal interests</h2>
                                <p className='bg-primary-100 w-full h-[1px] my-auto'></p>
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
                                    <button className={`${tab === 1 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-4xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(1)}>Ar & Vr
                                    </button>
                                </li>

                                <li>
                                    <button className={`${tab === 2 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-4xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(2)}>Music
                                    </button>
                                </li>

                                <li>
                                    <button className={`${tab === 3 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-4xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(3)}>Art
                                    </button>
                                </li>
                            </ul>
                            {/* End of Tabs navigation for setting personal interest */}
                        </div>
                    </div>

                    {/* section rendering based on what user choose to display */}
                    <div className="text-white">
                        <Canvas className='w-full h-full'>
                            <Suspense fallback={null}>

                                <PerspectiveCamera makeDefault position={[15, 7, 11]} />
                                <OrbitControls enableZoom={false} />
                                <ambientLight />
                                <directionalLight
                                    castShadow
                                    color="white"
                                    position={[0, 0, 5]}
                                />
                                {
                                    tab === 1 &&
                                    <mesh receiveShadow castShadow position={[0, 0, 0]}>
                                        <Vr />
                                    </mesh>
                                }
                                {/* {
                                    tab === 2 &&
                                    <mesh position={[0, 0, 0]}>
                                        <Headphone />
                                    </mesh>
                                } */}
                                {/* {
                                    tab === 3 &&
                                    <div>
                                        This is Art
                                    </div>
                                } */}
                            </Suspense>
                        </Canvas>
                    </div>

                </div>
            </div>
        </>
    )
}
