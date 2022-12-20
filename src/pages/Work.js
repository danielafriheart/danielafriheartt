import React, { useEffect } from 'react'
import Connect from '../components/Connect'
import Works from '../components/Works'

export default function Work() {
    //Title===============>>>>>>>>>
    useEffect(() => {
        document.title = 'Esuola Daniel | Works'
    })
    //====================>>>>>>>>>
    return (
        <>
            <Works />
            <Connect />
        </>
    )
}
