import React from 'react'
import { NavLink } from 'react-router-dom'
import Social from "../components/Social"
import AnimatedPage from '../AnimatedPage'
import rightarrow from "../Assets/arrow.png"
const ErrorPage = () => {
  return (
    <div className=' min-h-screen w-full flex flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black
                    animeclass'>
      <div className='homecontainer flex flex-col flex-grow
                      '>
        <div className='flex flex-col w-full p-[3rem] items-center'>
        <AnimatedPage>      
                <div class="hero-container mb-6 flex flex-col items-center gap-5">
                  <h2 className="hero glitch layers" data-text="Oops"><span className='text-[4rem]'>Oops!</span></h2>
                  <p className='text-[2rem] text-red-600'>Error 404- Page Not Found</p>
                </div>

                <div className='flex flex-col gap-3 mt-[3rem]'>
                    
                    <div>
                      <NavLink to="/"
                    
                       >
                        <div className='flex items-center gap-2 '>
                          <h2 className='text-white hover:underline underline-offset-4 animate-pulse'>Go Back Home..</h2>
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

export default ErrorPage