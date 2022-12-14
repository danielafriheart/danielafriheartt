import React from 'react'

function Project() {
    return (
        <div>
            <div className='md:h-[100vh] py-20 relative'>
                <div className="grid md:grid-cols-2 h-full w-[80vw] mx-auto">
                    <div>
                        <div className="flex flex-col gap-8">
                            <span className='flex md:text-5xl text-3xl gap-3'>
                                <h1 className='text-primary'>#</h1>
                                <h2 className='text-white'>projects</h2>
                                <p className='bg-primary w-full h-[1px] my-auto'></p>
                            </span>
                            <p className='text-gray md:w-[60%]'>
                                A selected set of projects I’ve
                                built with individuals and teams.
                            </p>
                            <p className='text-gray md:w-[60%]'>
                                This is a mix of personal,
                                collaborative and client owned
                                projects.
                            </p>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}

export default Project