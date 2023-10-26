import React from 'react'
import twitter from "../Assets/twitterbb.png"
import linkedin from "../Assets/linkedinblack.png"
import github from "../Assets/github-sign.png"
import leetcode from "../Assets/icons8-level-up-your-coding-skills-and-quickly-land-a-job-96 (1).png"
import instagram from "../Assets/instagrambb.png"
const Social = () => {
  return (
    <div className='flex gap-4 items-center'>

        <a href='https://twitter.com/imAditya_R' className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-cyan-200/50 drop-shadow-2xl p-2 rounded-full'><img src={twitter} className='h-[1.5rem]'/></a>
        <a href='https://www.linkedin.com/in/aditya-rokade/' className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-cyan-200/50 drop-shadow-2xl p-2 rounded-full'><img src={linkedin} className='h-[1.5rem]'/></a>
        <a href='https://github.com/AdityaRokade17' className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-cyan-200/50 drop-shadow-2xl p-2 rounded-full'><img src={github} className='h-[1.5rem]'/></a>
        <a href='https://leetcode.com/adityarokade176/' className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-cyan-200/50 drop-shadow-2xl p-2 rounded-full'><img src={leetcode} className='h-[1.5rem]'/></a>
        <a href='https://www.instagram.com/_aditya_rokade/' className='hover:scale-150 duration-300 bg-[#fff] shadow-lg shadow-cyan-200/50 drop-shadow-2xl p-2 rounded-full'><img src={instagram} className='h-[1.5rem]'/></a>


    </div>
  )
}

export default Social