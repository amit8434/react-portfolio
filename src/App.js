
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import React from 'react';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Aos from 'aos';
// import "aos/dist/aos.css"

function App() {
  return (
    <>
    
  <Navbar />
  
   <div className='container'>
    <Home/>
    <Experience/>
    <Skills/>
   < Education/>
    <Projects/>
    <Contact/>

   </div>

 

    </>
  );
}

export default App;
