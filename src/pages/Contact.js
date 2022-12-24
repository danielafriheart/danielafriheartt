import React, { useEffect } from 'react'
import Connect from '../components/Connect'

export default function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            leftL: 0,
            behavior: 'smooth'
        })
        document.title = 'Daniel Esuola | Contact'
    })
    return (
        <>
            <Connect />
        </>
    )
}
