import React, { useState } from 'react'
import Social from "../components/Social"
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import rightarrow from "../Assets/arrow.png"
import modernchair from "../Assets/modernchair.jpg"
import weatherpic from "../Assets/weatherpic.jpg"
import shopcart from "../Assets/shopping.jpg"
import biofuel from "../Assets/biofuel.jpg"
import AnimatedPage from '../AnimatedPage'
import github from "../Assets/github-sign.png"
const Projects = () => {
  
  const [activeproject , setActiveProject] = useState('project1');
  const prohandler = (projectName) => {
    setActiveProject(projectName);
  };
  return (
    <div className='min-h-[100vh] flex flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden'>
      
      
        <div className='flex flex-col justify-center w-full h-full p-[3rem]'>
          <AnimatedPage>     
              <h1 className='font-extrabold text-[#e5e7eb] text-[2rem] sm:text-[3rem] tracking-[0.30rem] mb-1 hero glitch layers' data-text="Projects.">Projects.</h1>
                
                <div className='projectc  flex justify-center lg:gap-x-[10rem] items-center flex-col sm:flex-row w-full h-full '>

                  <div className={` border border-slate-800 rounded-xl h-full mt-[2rem] 
                    shadow-[12px_16px_36px_33px_#1a202c] hover:scale-105 hover:shadow-[-4px_4px_125px_42px_#1a202c] hover:transition duration-300 cursor-pointer
                    ${activeproject === 'project1' ? 'block anipro' : 'hidden'} `}>
                    <img className='rounded-t-lg h-[20rem] w-[20rem] anipro1' src={modernchair}/>
                    <div className='flex justify-between p-2 gap-2'>
                      <div className={'flex gap-2'}>
                        <h1 className=' flex items-center border border-red-600 p-1 rounded-md text-[#dc2626]'>HTML</h1>
                        <h1 className='flex items-center border border-yellow-600 p-1 rounded-md text-[#fbbf24]'>CSS</h1>
                      </div>
                      
                      <a href='https://github.com/AdityaRokade17/Modern-Chair.git' 
                      className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-black-200/50 drop-shadow-2xl p-2 
                      rounded-full border border-black'><img src={github} className='h-[1.2rem] animate-bounce'/></a>
                     
                    </div>
                  </div>

                  <div className={`border border-slate-800 rounded-xl h-full mt-[2rem] 
                    shadow-[12px_16px_36px_33px_#1a202c] hover:scale-105 hover:shadow-[-4px_4px_125px_42px_#1a202c] hover:transition duration-300 cursor-pointer
                    ${activeproject === 'project2' ? 'block' : 'hidden'} `}>
                    <img className='rounded-t-lg h-[20rem] w-[20rem] anipro2' src={weatherpic}/>
                    <div className='flex justify-between p-2 gap-2'>
                      <div className={'flex gap-2'}>
                        <h1 className=' flex items-center border border-red-600 p-1 rounded-md text-[#dc2626]'>HTML</h1>
                        <h1 className='flex items-center border border-yellow-600 p-1 rounded-md text-[#fbbf24]'>CSS</h1>
                        <h1 className='flex items-center border border-blue-600 p-1 rounded-md text-[#3370ae]'>JAVASCRIPT</h1>
                      </div>
                      
                      <a href='https://github.com/AdityaRokade17/Weather-App-.git' 
                      className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-black-200/50 drop-shadow-2xl p-2 
                      rounded-full border border-black'><img src={github} className='h-[1.2rem] animate-bounce'/></a>
                     
                    </div>
                  </div>

                  <div className={`border border-slate-800 rounded-xl h-full mt-[2rem] 
                    shadow-[12px_16px_36px_33px_#1a202c] hover:scale-105 hover:shadow-[-4px_4px_125px_42px_#1a202c] hover:transition duration-300 cursor-pointer
                    ${activeproject === 'project3' ? 'block' : 'hidden'} `}>
                    <img className='rounded-t-lg h-[20rem] w-[20rem] anipro3' src={shopcart}/>
                    <div className='flex justify-between p-2 gap-2'>
                      <div className={'flex gap-2'}>
                        <h1 className=' flex items-center border border-blue-500 p-1 rounded-md text-[#2d8dad]'>REACT.JS</h1>
                        <h1 className='flex items-center border border-blue-800 p-1 rounded-md text-[#5e85f9]'>TAILWIND</h1>
                        
                      </div>
                      
                      <a href='https://github.com/AdityaRokade17/Shopping-Cart-React.git' 
                      className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-black-200/50 drop-shadow-2xl p-2 
                      rounded-full border border-black'><img src={github} className='h-[1.2rem] animate-bounce'/></a>
                     
                    </div>
                  </div>

                  <div className={`border border-slate-800 rounded-xl h-full mt-[2rem] 
                    shadow-[12px_16px_36px_33px_#1a202c] hover:scale-105 hover:shadow-[-4px_4px_125px_42px_#1a202c] hover:transition duration-300 cursor-pointer
                    ${activeproject === 'project4' ? 'block' : 'hidden'} `}>
                    <img className='rounded-t-lg h-[20rem] w-[20rem] anipro4' src={biofuel}/>
                    <div className='flex justify-between p-2 gap-2'>
                      <div className={'flex gap-2'}>
                        <h1 className=' flex items-center border border-blue-500 p-1 rounded-md text-[#2d8dad]'>MERN STACK</h1>
                        
                        
                      </div>
                      
                      <a href='https://github.com/AdityaRokade17' 
                      className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-black-200/50 drop-shadow-2xl p-2 
                      rounded-full border border-black'><img src={github} className='h-[1.2rem] animate-bounce'/></a>
                     
                    </div>
                  </div>
                  
                  
                  <div className='p-5'>
                    <div>
                      <h1 className='text-[2rem] font-bold text-white'>Projects</h1>
                    </div>
                    <div className='flex flex-col p-5 gap-2'>
                      <NavLink onClick={ () => prohandler('project1')} className=""><h1 className={`text-[#a8a29e] ${activeproject === 'project1' ? 'text-emerald-50 underline underline-offset-8 decoration-sky-500' : ''}`}>Modern Chair</h1></NavLink>
                      <NavLink onClick={ () => prohandler('project2')} className=""><h1 className={`text-[#a8a29e] ${activeproject === 'project2' ? 'text-emerald-50 underline underline-offset-8 decoration-sky-500' : ''}`}>Weather App</h1></NavLink>
                      <NavLink onClick={ () => prohandler('project3')} className=""><h1 className={`text-[#a8a29e] ${activeproject === 'project3' ? 'text-emerald-50 underline underline-offset-8 decoration-sky-500' : ''}`}>Shopping Cart</h1></NavLink>
                      <NavLink onClick={ () => prohandler('project4')} className=""><h1 className={`text-[#a8a29e] ${activeproject === 'project4' ? 'text-emerald-50 underline underline-offset-8 decoration-sky-500' : ''}`}>BioFuel Supply Chain Management</h1></NavLink>
                    </div>
                    
                  </div>

                </div>
                
                <div className='flex flex-col gap-3 mt-[3rem]'>
                    
                    <div>
                      <NavLink to="/contact">
                        <div className='flex items-center gap-2 '>
                          <h2 className='text-white hover:underline underline-offset-4'>Are you convinced to contact me now ?</h2>
                          <span className=' arrow animation animate-pulse hover:scale-150 transition-transform'><img src={rightarrow} className='h-[2rem]'/></span>
                        </div>
                      </NavLink>
                    </div>
                    

                    <div>
                      <Social/>
                    </div>

                </div>
                
            </AnimatedPage>    
        </div>
      
      
    </div>
  )
}

export default Projects