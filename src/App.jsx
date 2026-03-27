import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Hero from './sections/hero.jsx'
import About from './sections/aboutme.jsx'
import Skills from './sections/skills.jsx'
import Projects from './sections/projects.jsx'
import Certifications from './sections/certifications.jsx'
import Contact from './sections/contact.jsx'
import Chatbot from './components/chatbot.jsx'
import Footer from './components/footer.jsx'

function App() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Certifications/>
    <Contact/>
    <Chatbot/>
    <Footer/>
    </>
  );
}

export default App
