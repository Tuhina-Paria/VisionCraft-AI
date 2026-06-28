import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
// import Description from '../components/Description'
import Features from '../components/Features'
import GenerateBtn from '../components/GenerateBtn'
import Showcase from '../components/Showcase'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black">

      <Header/>
      <Showcase/>
      <Steps/>
      {/* <Description/> */}
      <Features/>
      <GenerateBtn/>
    </div>
  )
}

export default Home
