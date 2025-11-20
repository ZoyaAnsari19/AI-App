import React from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import Home from './components/Home'
import LogoMarquee from './components/LogoMarquee'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <LogoMarquee/>
      <About/>
      <HowItWorks/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App;
