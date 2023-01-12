import React from 'react'

export default function Awards() {

    //Recognitions & Awards =======================>>>>>>>>>>>>>>
    const awards = [
        {
            id: 1,
            year: 2022,
            platform: 'FreeCodeCamp',
            recognitionFor: 'Responsive Web Design'
        },
    ];
    //=============================================>>>>>>>>>>>>>>
    return (
        <>
            <div className='py-20 relative'>
                <div className="h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
                    <header className='flex md:text-5xl text-3xl gap-3'>
                        <h1 className='text-primary'>/</h1>
                        <h2 className='text-white w-full'>awards & recognitions</h2>
                        <p className='bg-primary-100 w-full h-[1px] my-auto'></p>
                    </header>

                    <div className="grid md:grid-cols-[20%,80%] ">
                        <div className=""></div>
                        <div className="">
                            <table className='table-auto table w-full lg:mt-20 text-left'>
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
            </div>
        </>
    )
}
