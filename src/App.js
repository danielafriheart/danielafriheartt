import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Preloader from './components/Preloader';
import SideNav from './components/SideNav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';


export default function App() {

  const [loading, setLoading] = useState(false); //loader State
  useEffect(() => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000) //3 Seconds

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