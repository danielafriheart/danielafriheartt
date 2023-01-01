import React, { useEffect } from 'react'
import About from '../components/About'
// import Awards from '../components/Awards'
import Connect from '../components/Connect'
import Hero from '../components/Hero'
import Interest from '../components/Interest'
import Project from '../components/Project'

export default function Home() {
    useEffect(() => {
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
        );
        document.title = 'Daniel Esuola | About'
    })
    // componentDidMount(() => {
    //     window.scrollTo(0, 0);
    // )}
    return (
        <>
            <Hero />
            <About />
            <Interest />
            {/* <Awards /> */}
            <Project />
            <Connect />
        </>
    )
}