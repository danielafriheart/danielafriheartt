import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav';
import Home from './pages/Home';

function App() {
  // page title
  useEffect(() => {
    document.title = 'O k i k i o l a.'
  });

  return (
    <>
      <Navbar />
      <SideNav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App