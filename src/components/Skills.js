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
            skill: ['ReactJS ', ' Express', ' Angular', ' Tailwind', ' Bootstrap', ' Sass']
        },
        {
            id: 3,
            title: 'Tools',
            skill: ['VSCode ', ' Figma', ' Git', ' Font Awesome']
        },
        {
            id: 4,
            title: 'Databases',
            skill: 'MongoDB'
        },
    ]
    const skill = skills.map(skillSet => {
        return (
            <div className='text-white border border-gray'>
                <p className='border-b border-gray p-2'>{skillSet.title}</p>
                <p className='text-gray p-2'>{skillSet.skill}</p>
            </div>
        )
    })
    return (
        <div className='grid grid-cols-2 gap-8'>
            {skill}
        </div>
    )
}
