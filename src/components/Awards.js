import React from 'react'

export default function Awards() {

    //Recognitions & Awards =======================>>>>>>>>>>>>>>
    const awards = [
        {
            id: 1,
            year: 2023,
            platform: 'FreeCodeCamp',
            recognitionFor: 'JavaScript Algorithms & Data Structures'
        },
        {
            id: 2,
            year: 2022,
            platform: 'FreeCodeCamp',
            recognitionFor: 'Responsive Web Design'
        },
    ];
    //=============================================>>>>>>>>>>>>>>
    return (
        <section className='py-10 relative' data-scroll-section>
            <div className="h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
                <header className='flex md:text-5xl text-3xl gap-3'>
                    <h1 className='text-primary'
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="100"
                        data-aos-offset="0"
                    >
                        02
                    </h1>

                    <div>
                        <h2 className='text-white w-full' data-scroll
                            data-aos="fade-in"
                            data-aos-delay="200"
                            data-aos-easing="ease-in-sine"
                        >
                            awards &
                        </h2>

                        <h2 className='text-white w-full' data-scroll
                            data-aos="fade-in"
                            data-aos-delay="300"
                            data-aos-easing="ease-in-sine"
                        >
                            recognitions
                        </h2>
                    </div>

                    <p className='bg-primary-100 w-1/2 ml-auto h-[1px] my-auto'
                        data-aos="fade-in"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-sine"
                    ></p>
                </header>

                <div className="grid md:grid-cols-[20%,80%] ">
                    <div className=""></div>
                    <div className="">
                        <table className='table-auto table w-full lg:mt-20 md:mt-20 text-left'
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-easing="ease-in-sine"
                        >
                            <thead className='text-white border-b border-primary-100 border-opacity-25'>
                                <tr className='text-2xl w-full  hidden md:flex justify-between'>
                                    <th className='pb-5 w-full'>Project</th>
                                    <th className='pb-5 w-full lg:text-center'>Award / Platform</th>
                                    <th className='pb-5 w-full text-end'>Year</th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>
                                {
                                    awards.map((recognition, i) => {
                                        return (
                                            <tr className=" border-b border-primary-100 border-opacity-25 flex md:flex-row flex-col w-full justify-between lg:py-0 py-10" key={i}>
                                                <td className='lg:py-10 w-full'><p className=' text-gray'>{recognition.recognitionFor}</p></td>
                                                <td className='lg:py-10 w-full lg:text-center'><p className=' text-gray'>{recognition.platform}</p></td>
                                                <td className='lg:py-10 w-full lg:text-end'><p className=' text-gray'>{recognition.year}</p></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
