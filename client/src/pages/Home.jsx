import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0f0d2b] to-[#1a1640] pt-20">

      <Header/>
      <Steps/>
      <Description/>
    </div>
  )
}

export default Home
