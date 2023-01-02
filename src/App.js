import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import SideNav from './components/SideNav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';
import HashLoader from "react-spinners/HashLoader";

function App() {

  const [loading, setLoading] = useState(false); //set loader state false

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);

  return (
    <>
      {
        loading ?
          <div className='w-full h-screen p-20'>
            <div className=" w-[85vw] sm:w-[95vw] lg:w-[90vw] mx-auto h-full">

              <div className="h2 text-white text-3xl">
                Esuola Daniel <br />
                Portfolio 2023
              </div>

              <div className='flex justify-center items-center h-full'>
                <HashLoader
                  color={'#CF95FC'}
                  loading={loading}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>

            </div>
          </div>
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

export default App