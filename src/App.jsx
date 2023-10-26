import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./pages/ErrorPage";
function App() {
  

  return (
    <div className="wrapper ">
    
      <div className="">
        <Navbar />
      </div>
     
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      
    
    </div>
    
  );
}

export default App;
