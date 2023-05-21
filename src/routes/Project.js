import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PriceTag from '../components/PriceTag'
import Work from '../components/Work'

function Project() {
  return (
    <div >
      <Navbar/>
      <HeroImg2 heading="project." text="this is my some recent project"/>
      <Work/>
      <PriceTag/>
      <Footer/>
    </div>
  )
}

export default Project