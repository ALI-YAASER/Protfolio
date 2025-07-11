import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About.jsx'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";


function App() {

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
      <div>
    <div className='md:px-25'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </div>
    <Footer />
</div>
  )
}

export default App
