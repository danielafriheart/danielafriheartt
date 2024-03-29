import React, { useEffect } from 'react'
import About from '../components/About'
import Awards from '../components/Awards'
import Connect from '../components/Connect'
import Hero from '../components/Hero'
import Interest from '../components/Interest'
import Services from '../components/Services'
import Map from '../components/Map'
import Project from '../components/Project'
import SimpleSnackbar from '../components/SnackBar'

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

    return (
        <div id='container' data-scroll-container>
            {/* <div className='hidden lg:flex'>
                <SimpleSnackbar />
            </div> */}
            <Hero />
            <About />
            {/* <Map /> */}
            <Awards />
            <Interest />
            <Services />
            <Project />
            <Connect />
        </div>
    )
}