import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import LogoMarquee from "./components/LogoMarquee";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #080F15;
}
`}</style>
      <NavBar />
      <Home />
      <LogoMarquee />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
