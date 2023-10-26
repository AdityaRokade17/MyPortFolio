import React from 'react'
import Social from "../components/Social"
import { Link, NavLink } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import rightarrow from "../Assets/arrow.png"
import aditya1 from "../Assets/Aditya1.jpg"
import sketch from "../Assets/sketch1.jpg"
import sports from "../Assets/sports1.jpg"
import photography from "../Assets/photogrphy1.jpg"

import AnimatedPage from '../AnimatedPage'


const About = () => {
  return (
  
    <div className='min-h-[100vh] flex flex-col  justify-center 
                     bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      
      
        <div className='flex flex-col justify-center w-full h-full p-[3rem]'>
              <AnimatedPage>    
                <h1 className='font-extrabold text-[#e5e7eb] text-[2rem] md:text-[3rem] tracking-[0.30rem] mb-4 hero glitch layers' data-text="A Byte About Me.">A Byte About Me.</h1>
                <div className='text-slate-300 '>
                  <div className='text-[1.3rem] text-slate-50 my-[3rem] underline underline-offset-8'>EDUCATION AND EXPERIENCE</div>
                    <p className='m-2'>A recent Computer Engineering graduate with an 8.24 CGPA. I'm passionate about leveraging technology to solve complex problems.</p>
                    <p className='m-2'>My Experience at Humming Byte Technologies Pvt.Ltd. <span className='text-green-600 underline underline-offset-8 '><a href='https://drive.google.com/file/d/1eezW8z0Rr-X-YQoahOViZac8eRuXQ0Iy/view?usp=sharing'>[CERTIFICATE]</a></span>,  allowed me to excel in web development, with a focus on responsive design principles.</p>
                    <p className='m-2'>During my internship at Extentia Information Technology <span className='text-green-600 underline underline-offset-8 '><a href='https://drive.google.com/file/d/1CcB8fpbMPYBjT5juX62GJoePJ8iUKchC/view?usp=sharing'>[CERTIFICATE]</a></span>, I learned Salesforce technologies and completed a project involving a Corporate Vaccine Requirement App</p>
                    
                  <div className='text-[1.3rem] text-slate-50 my-[2rem] underline underline-offset-8'>EXTRA-CURRICULAR ACTIVITIES</div>
                    <p className='m-2'>Contributed to the Tech Forum team, Actively publishing the latest technology news and in-depth insights
                                      during college</p>
                    <p className='m-2'>Pursued a keen interest in photography, capturing moments and perspectives that tell compelling visual stories.</p>
                    <p className='m-2'>In my free time, I have a strong passion for cricket and enjoy playing the sport. Additionally, I occasionally indulge in sketching, allowing me to express my creativity and imagination on paper. </p>
                  
                  <h1 className='text-[1.3rem] my-[3rem] text-slate-50 underline underline-offset-8'>Gallery</h1>
                <div className='flex justify-center items-center h-[30rem] w-full'>
                  <div className='flex w-[30rem] p-5 shadow-[12px_16px_36px_33px_#1a202c] hover:scale-105 hover:shadow-[-4px_4px_125px_42px_#1a202c] hover:transition duration-700 cursor-pointer '>
                  <Carousel className="">
                      <div className="carousel-item">
                        <img
                          src={aditya1}
                          alt="image 1"
                          className="max-h-[25rem] max-w-[25rem]"
                        />
                        <p className="text-white text-center m-2 h-[3rem]">Behind the Code: Meet the Web Developer</p>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={photography}
                          alt="image 2"
                          className="max-h-[25rem] max-w-[25rem]"
                        />
                        <p className="text-white text-center mt-2">Capturing Moments</p>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={sketch}
                          alt="image 3"
                          className="max-h-[25rem] max-w-[25rem]"
                        />
                        <p className="text-white text-center mt-2">Expressing Creativity</p>
                      </div>
                      <div className="carousel-item">
                        <img
                          src={sports}
                          alt="image 4"
                          className="max-h-[25rem] max-w-[25rem]"
                        />
                        <p className="text-white text-center mt-2">Enjoying Sports</p>
                      </div>
                    </Carousel>
                  </div>
                  
                </div>  

                <div className='flex flex-col gap-3 mt-[3rem]'>
                    
                    <div>
                      <NavLink to="/projects">
                        <div className='flex items-center gap-2 '>
                          <h2 className='text-white hover:underline underline-offset-4 animate-pulse'>Let's Continue To Projects..</h2>
                          <span className=' arrow animation animate-pulse hover:scale-150 transition-transform'><img src={rightarrow} className='h-[2rem]'/></span>
                        </div>
                      </NavLink>
                    </div>
                    

                    <div>
                      <Social/>
                    </div>

                </div>
              </div>
            </AnimatedPage>
        </div>
      
      
    </div>
  )
}

export default About;