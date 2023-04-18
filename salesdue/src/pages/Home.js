import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import Announcement from '../components/Announcement'

function Home() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Hero /> 
        <Features />
        <Pricing />
        <FAQ />
        <Footer />  
     
    </div>
  )
}

export default Home