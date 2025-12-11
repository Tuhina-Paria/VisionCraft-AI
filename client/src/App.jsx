import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'   // ← Correct import (not from postcss)
import BuyCredit from './pages/BuyCredit'
import Navber from './components/Navber'

const App = () => {
  return (
    // <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-[#0f0d2b] to-[#1a1640] text-white'>
       <Navber/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} /> 
      </Routes>
    </div>
  )
}

export default App;
