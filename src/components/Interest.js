import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react'
//Images==============>>>>>>>>>>>>>>>>>
import bgDots from "../assets/img/bgDots.png";
import { Beats } from '../models/Beats';
import { Vr } from '../models/Vr';


export default function Interest() {

    //Tab=================>>>>>>>>>>>
    const [tab, setNewTab] = useState(1);
    //====================>>>>>>>>>>>


    return (
        <>
            <div className='lg:h-[85vh] h-full py-20 relative'>
                <img src={bgDots} alt="" className='absolute md:bottom-0 bottom-52 md:right-20 opacity-30' />
                <img src={bgDots} alt="" className='absolute md:bottom-0 bottom-52 md:left-20 opacity-30' />
                <div className='text-white opacity-[3%] text-[10em] absolute right-20 top-0 text-right h2'>Personal <br /> Interests</div>
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
                                    The concept of being able to fully immerse myself in a completely different world, with the ability to interact with it as if it were real, is absolutely thrilling to me. It is a technology that I am deeply interested in and am excited to see where it takes us in the future.
                                </p>
                            }
                            {
                                tab === 2 &&
                                <p className='text-gray'>
                                    Music has the power to transport me to different worlds, lift my mood, and help me express myself in ways that words simply cannot. From the upbeat rhythms of Amapiano, Afrobeat to the soulful melodies of Fuji, I find myself drawn to the unique sounds and styles of different genres.
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
                                    <button className={`${tab === 1 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-4xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(1)}>Virtual Reality
                                    </button>
                                </li>

                                <li>
                                    <button className={`${tab === 2 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-4xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(2)}>Music
                                    </button>
                                </li>

                                {/* <li>
                                    <button className={`${tab === 3 ? 'text-gray opacity-25 underline' : 'text-gray opacity-10'} h2 md:text-4xl text-2xl hover:text-gray hover:opacity-20 transition-all duration-300`} onClick={() => setNewTab(3)}>Art
                                    </button>
                                </li> */}
                            </ul>
                            {/* End of Tabs navigation for setting personal interest */}
                        </div>
                    </div>

                    {/* section rendering based on what user choose to display */}
                    <div className="text-primary-100">
                        <Canvas className='w-full h-full'>
                            <Suspense fallback={null}>
                                <PerspectiveCamera makeDefault position={[15, 7, 11]} fov={[50]} />
                                <OrbitControls enableZoom={false} minPolarAngle={[0]} maxPolarAngle={[1]} />
                                {
                                    tab === 1 &&
                                    <>
                                        <ambientLight />
                                        <directionalLight
                                            castShadow
                                            color="white"
                                            position={[0, 10, 5]}
                                        />
                                        <mesh receiveShadow castShadow position={[0, 0, 0]}>
                                            <Vr />
                                        </mesh>
                                    </>
                                }
                                {
                                    tab === 2 &&
                                    <>
                                        <ambientLight intensity={[5]} />
                                        <directionalLight
                                            castShadow
                                            args={["#fff", 2]}
                                            position={[0, 10, 5]}
                                        />
                                        <mesh position={[1, 1, 0]}>
                                            <Beats />
                                        </mesh>
                                    </>
                                }
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
