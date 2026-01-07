import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'



import Home from './pages/Home'
import Result from './pages/Result'   // ← Correct import (not from postcss)
import Navber from './components/Navber'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import MyImages from './pages/MyImages';
import SharedImage from './pages/SharedImage';

const App = () => {

  const {showUserLogin}=useContext(AppContext)

  return (
    // <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-[#0f0d2b] to-[#1a1640] text-white'>



       < ToastContainer  position='bottom-right'/>
       <Navber/>
      {showUserLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path="/gallery" element={<MyImages />} />
        <Route path="/share/:shareId" element={<SharedImage />} />


      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
