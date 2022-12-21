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
                        <p className='bg-primary w-full h-[1px] my-auto'></p>
                    </header>

                    <div className="grid md:grid-cols-[20%,80%] ">
                        <div className=""></div>
                        <div className="">
                            <table className='table-auto table w-full mt-36 text-left'>
                                <thead className='text-white border-b border-primary-100 border-opacity-25'>
                                    <tr className='text-2xl'>
                                        <th className='pb-5'>Project</th>
                                        <th className='pb-5'>Award / Platform</th>
                                        <th className='pb-5'>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        awards.map((recognition, i) => {
                                            return (
                                                <tr className="text-white py-5 border-b border-primary-100 border-opacity-25" key={i}>
                                                    <td className='py-10'><p>{recognition.recognitionFor}</p></td>
                                                    <td className='py-10'><p>{recognition.platform}</p></td>
                                                    <td className='py-10'><p>{recognition.year}</p></td>
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
