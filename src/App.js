import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  // page title
  useEffect(() => {
    document.title = 'danielAfriheart'
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/about' element={<Hero />} />
      </Routes>
    </>
  )
}

export default App