import React, { useEffect } from 'react'
import youtube from '../assets/youtube.png';
import todo from '../assets/todo.png';
import { IoMdArrowDroprightCircle } from 'react-icons/io';

import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = () => {
  useEffect(() => {
    AOS.init({
      duration:800,
      delay:200,
      once: false,
    })
  }, []);

  return (
    <div id = 'project' className='w-full lg:px-[200px] px-8 py-[40px] h-full flex flex-col justify-between items-start gap-5'>
      <h1 data-aos="zoom-in" className='text-4xl uppercase text-white font-poppins font-semibold'>Projects</h1>
      <div data-aos="zoom-in" data-aos-delay="200" className='bg-themered h-[3px] w-20'></div>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-lg text-start font-poppins lg:w-[70%] w-full'>Here are few projects i have made</p>
      <div className="w-full flex justify-center">
      <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-8'>
        <div data-aos="zoom-in" data-aos-delay="400" className='w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg'>
          <img src={youtube} alt="Youtube Project" className='w-24 h-24 rounded-full object-cover transition-all duration-300 ease-in-out hover:scale-110'></img>
          <h1 className='text-white font-semibold text-[24px] font-poppins'>Youtube-clone</h1>
          <u1 className='flex flex-col justify-center items-center gap-2 text-white'>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-4'/></span>Developed a YouTube- like video streaming platform using HTML, CSS, JavaScript .</li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-4'/></span>Implemented responsive UI, video playback functionality and good user experience setup.</li>
          </u1>
          <a
            href="https://github.com/diya94/Youtube-Clone"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className='text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2'>Github link</button>
          </a>
        </div>
      
        <div data-aos="zoom-in" data-aos-delay="400" className='w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themered px-6 py-8 rounded-lg'>
          <img src={todo} alt="To-do" className='w-24 h-24 rounded-full object-cover transition-all duration-300 ease-in-out hover:scale-110'></img>
          <h1 className='text-white font-semibold text-[24px] font-poppins'>To-do</h1>
          <u1 className='flex flex-col justify-center items-center gap-2 text-white'>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-4'/></span>This project is a basic Task Management Applications to help users organized daily tasks.</li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'><span><IoMdArrowDroprightCircle className='size-4'/></span> Integrated features like task additions, deletions, and real-time updates.</li>
          </u1>
          <a
            href="https://github.com/diya94/To-Do-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className='text-white font-semibold border-2 mt-5 hover:bg-themered border-white hover:border-themered rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2'>Github link</button>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default projects