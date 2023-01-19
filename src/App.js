import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Preloader from './components/Preloader';
import SideNav from './components/SideNav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function App() {

  const [loading, setLoading] = useState(false); //loader State

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000) //3 Seconds timeout
  }, []);

  // cursor
  // document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.link')
  const cursor = document.querySelector('.cursor')

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      console.log(link);
      cursor.classList.add("bigCursor");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("bigCursor");
    });
  });
  // });


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