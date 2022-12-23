import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import SideNav from './components/SideNav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {

  return (
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
  )
}

export default App