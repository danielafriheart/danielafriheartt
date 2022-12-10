import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
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