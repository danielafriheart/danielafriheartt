import React, { useEffect } from 'react'
import Connect from '../components/Connect'
import Works from '../components/Works'

export default function Work() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        document.title = 'Daniel Esuola | Works'
    });

    return (
        <>
            <Works />
            <Connect />
        </>
    )
}
