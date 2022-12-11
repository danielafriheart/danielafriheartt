import React from 'react'

export default function Skills() {
    const skills = [
        {
            id: 1,
            title: 'Languages',
            skill: 'Html5'
        },
        {
            id: 2,
            title: 'Framewworks',
            skill: 'Html5'
        },
        {
            id: 3,
            title: 'Tools',
            skill1: 'VSCode',
            skill2: 'VSCode',
            skill3: 'VSCode',
            skill4: 'VSCode'
        },
        {
            id: 4,
            title: 'Databases',
            skill: 'MongoDB'
        },
    ]
    const skill = skills.map(skillSet => {
        return (
            <div className='text-white' key={skillSet.id}>
                <p className='border'>{skillSet.title}</p>
                <span className='flex gap-4'>
                <p className='border'>{skillSet.skill1}</p>
                <p className='border'>{skillSet.skill2}</p>
                </span>
                <p className='border'>{skillSet.skill3}</p>
            </div>
        )
    })
    return (
        <div className='grid grid-cols-2 gap-4'>
            {skill}
        </div>
    )
}
