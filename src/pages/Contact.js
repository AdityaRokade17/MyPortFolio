import React from 'react'
import Social from "../components/Social"
import rightarrow from "../Assets/arrow.png"
import { NavLink, json } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import mail from "../Assets/icons8-mail-96.png"
import call from  "../Assets/icons8-phone-100 (1).png";
import AnimatedPage from '../AnimatedPage'
import '../pages/contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  // console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      // console.log(prevFormData);
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Data to send to the server
    const data = {
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/sendmessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Message sent successfully');
        // You can optionally reset the form here
        setFormData({ name: '', email: '', comment: '' });
      } else {
        const errorData = await response.json();
        console.error('Failed to send message:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='min-h-[100vh] flex flex-col sm:flex-row w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      
        <div className='flex flex-col justify-center w-full h-full p-[3rem]'>
            <AnimatedPage>
                <h1 className='font-extrabold text-[#e5e7eb] text-[2rem] sm:text-[3rem] tracking-[0.30rem] mb-4 hero glitch layers' data-text="Contact">Contact.</h1>
                <div className='w-[80%] flex-col'>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                      <input
                        type="text"
                        placeholder="Name"
                        onChange={changeHandler}
                        name="name"
                        value={formData.name}
                        className='border border-slate-600 bg-transparent p-2 rounded-lg text-white'
                      />

                      <input
                        type="email"
                        placeholder="Email"
                        onChange={changeHandler}
                        name="email"
                        value={formData.email}
                        className='border border-slate-600 bg-transparent p-2 rounded-lg text-white'
                      />

                      <textarea
                        name="comment"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="Message"
                        onChange={changeHandler}
                        value={formData.comment}
                        className='border border-slate-600 bg-transparent p-2 rounded-lg text-white'
                      ></textarea>

                      <input type="submit" value="Send Message" onClick={submitHandler} className='bg-white w-fit p-2 
                            rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white hover:scale-90 hover:transition duration-300' />
                    </form>

                </div>
                
                
                <div className='flex flex-col gap-3 mt-[3rem]'>
                    
                    <div>
                      <NavLink to="/">
                        <div className='flex items-center gap-2 '>
                          <h2 className='text-white hover:underline underline-offset-4 animate-pulse'>Go Back Home</h2>
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
        <AnimatedPage>
          <div className='flex flex-col justify-center w-full  p-[3rem] text-emerald-50 gap-4'>
            <h1 className='font-extrabold text-[#e5e7eb] text-[1rem] sm:text-[2rem] tracking-[0.30rem] mb-4'>Let's code and innovate together!</h1>
            <p>Feel free to get in touch with me, I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <p className='flex gap-2'><span><img className='bg-white rounded-full h-[2rem] w-[2rem] p-1' src={mail}/> </span>adityarokade176@gmail.com</p>
            <p className='flex gap-2'><span><img  className='bg-white rounded-full h-[2rem] w-[2rem] p-1' src={call}/> </span>+91-9881180488 </p>
          </div>
        </AnimatedPage>
 
    </div>
  )
}

export default Contact