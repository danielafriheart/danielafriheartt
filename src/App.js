import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Preloader from './components/Preloader';
import SideNav from './components/SideNav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';

import gsap from 'gsap';
import SplitType from 'split-type';
import useLocomotiveScroll from './components/useLocomotiveScroll';



export default function App() {

  const [loading, setLoading] = useState(false); //loader State

  // useLocomotiveScroll(!loading); //not working yet, paused for later.

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000) //3 Seconds timeout


    const split = new SplitType('#split', {
      type: 'lines',
      lineClass: 'Linechildren',
    })//GSAP

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2'
    })

  }, []);

  return (
    <>
      {
        loading ?
          <Preloader />
          :
          <>
            <Navbar />
            <SideNav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/works' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </>
      }
    </>
  )
}