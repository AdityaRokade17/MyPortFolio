import React from 'react'
import { NavLink } from 'react-router-dom'
import Social from "../components/Social"
import AnimatedPage from '../AnimatedPage'
import rightarrow from "../Assets/arrow.png"
const Home = () => {
  return (
  
  
    <div className=' min-h-screen w-full flex flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black
                    animeclass'>
      <div className='homecontainer flex flex-col flex-grow justify-center
                      '>
        <div className='flex flex-col justify-center w-full p-[3rem]'>
        <AnimatedPage>      
                <div class="hero-container mb-6 ">
                  <h2 class="hero glitch layers" data-text="I'M Aditya Rokade"><span>I'M ADITYA ROKADE</span></h2>
                </div>

                <p className='text-slate-300 mb-4'>As a recent Computer Science graduate with strong skills in Java & Web Development. 
                I am eager to contribute my technical expertise and problem-solving abilities to your team.
                </p>
                <p className='text-slate-300 mb-8'>My passion for innovation, dedication to excellence, and eagerness to learn align perfectly with Sprout Social's vision.
                I am confident that my skills and enthusiasm make me a valuable addition to your team.</p>
                

                <div className='flex flex-col gap-3 mt-[3rem]'>
                    
                    <div>
                      <NavLink to="/about"
                    
                       >
                        <div className='flex items-center gap-2 '>
                          <h2 className='text-white hover:underline underline-offset-4 animate-pulse'>A Byte About Me</h2>
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
      
    </div>
  
  )
}

export default Home