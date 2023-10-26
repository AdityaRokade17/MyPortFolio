import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import scc from '../Assets/scc.png';
import AnimatedPage from '../AnimatedPage';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className='flex justify-around items-center h-20 w-full mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <AnimatedPage>      
        <NavLink to='/'>
          <div className='text-[#c2c5c9]'>
            <img src={scc} className='h-[2rem] md:h-[4rem]' alt='Logo' />
          </div>
        </NavLink>
      </AnimatedPage>


      <div className='flex gap-4'>
        <NavLink
            to="/"
            className={` text-[#a8a29e] hover:underline underline-offset-8 decoration-sky-500 hover:scale-110 transition-all duration-300 ${
              location.pathname === '/' ? 'text-sky-50 underline underline-offset-8' : ''
            }`}
          >
            <p className='md:text-[1rem] text-[0.70rem]'>Home</p>
        </NavLink>

        <NavLink
          to='/about'
          className={`text-[#a8a29e] hover:underline underline-offset-8 decoration-sky-500 hover:scale-110 transition-all duration-300 ${
            location.pathname === '/about' ? 'text-emerald-50 underline underline-offset-8' : ''
          }`}
        >
          <p className='md:text-[1rem] text-[0.70rem]'>About</p>
        </NavLink>
        <NavLink
          to='/projects'
          className={`text-[#a8a29e] hover:underline underline-offset-8 decoration-sky-500 hover:scale-110 transition-all duration-300 ${
            location.pathname === '/projects' ? 'text-emerald-50 underline underline-offset-8' : ''
          }`}
        >
          <p className='md:text-[1rem] text-[0.70rem]'>Projects</p>
        </NavLink>
        <NavLink
          to='/contact'
          className={`text-[#a8a29e] hover:underline underline-offset-8 decoration-sky-500 hover:scale-110 transition-all duration-300 ${
            location.pathname === '/contact' ? 'text-emerald-50 underline underline-offset-8' : ''
          }`}
        >
          <p className='md:text-[1rem] text-[0.70rem]'>Contact</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
