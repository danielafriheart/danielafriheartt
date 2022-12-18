import React, { useEffect } from 'react'
import Connect from '../components/Connect'
import Works from '../components/Works'

export default function Work() {
    //Title===============>>>>>>>>>
    useEffect(() => {
        document.title = 'O k i k i o l a | Works'
    })
    //====================>>>>>>>>>
    return (
        <>
            <Works />
            <Connect />
        </>
    )
}
