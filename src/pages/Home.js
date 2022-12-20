import React, { useEffect } from 'react'
import About from '../components/About'
import Awards from '../components/Awards'
import Connect from '../components/Connect'
import Hero from '../components/Hero'
import Interest from '../components/Interest'
import Project from '../components/Project'

export default function Home() {
    useEffect(() => {
        document.title = 'Esuola Daniel | About'
    })
    return (
        <>
            <Hero />
            <About />
            <Interest />
            <Awards />
            <Project />
            <Connect />
        </>
    )
}