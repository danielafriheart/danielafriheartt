import React from 'react'

export default function Skills() {
    const skills = [
        {
            id: 1,
            title: 'Languages',
            skill: ['Html5 ', ' CSS3', ' JavaScript', ' NodeJS']
        },
        {
            id: 2,
            title: 'Framewworks',
            skill: ['ReactJS ', ' Express', ' Angular', ' TailwindCSS', ' Bootstrap', ' Sass']
        },
        {
            id: 3,
            title: 'Tools',
            skill: ['VSCode ', ' Figma', ' Git', ' Photoshop']
        },
        {
            id: 4,
            title: 'Databases',
            skill: 'MongoDB'
        },
    ]

    return (
        <div className='grid grid-cols-2 gap-8'>
            <div className='text-white opacity-[3%] text-[10em] absolute right-20 top-20 text-right h2'>Skills</div>

            {
                skills.map((skillSet, i) => {
                    return (
                        <div className='text-white md:border border-gray border-opacity-25' key={i}>
                            <p className='border-b border-gray border-opacity-25 p-2'>{skillSet.title}</p>
                            <p key={i} className='text-gray p-2'>{skillSet.skill}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
