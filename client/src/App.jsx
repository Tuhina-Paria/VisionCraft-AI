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
  <div className="min-h-screen flex flex-col bg-black text-white">

    <ToastContainer position="bottom-right" />

    <Navber />

    {showUserLogin && <Login />}

    {/* Main Content */}
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/gallery" element={<MyImages />} />
        <Route path="/share/:shareId" element={<SharedImage />} />
      </Routes>
    </main>

    <Footer />

  </div>
);
}

export default App;
