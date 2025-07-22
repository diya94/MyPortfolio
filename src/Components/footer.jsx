import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaArrowUp, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-scroll'; // Capitalized

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div id='links' className='bg-black w-full px-8 py-[80px] flex flex-col justify-center items-center gap-5'>
      <h1 data-aos="zoom-in" className='capitalize text-white text-[25px] font-semibold font-poppins'>
        Get in touch with me
      </h1>

      <a 
        href="mailto:diyakarmakar365@gmail.com" 
        className="text-white font-poppins hover:underline text-[16px] text-center leading-8"
      >
        diyakarmakar365@gmail.com
      </a>

      <div 
        data-aos="zoom-in" 
        data-aos-delay="400" 
        id="social-icons" 
        className='w-full flex justify-center items-center gap-3 mt-6'
      >
        <a 
          href="https://www.linkedin.com/in/diya-karmakar45/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-[#2f2f2f] hover:bg-gray-400 rounded-full p-3 cursor-pointer'
        >
          <FaLinkedin className='fill-white size-6' />
        </a>
        <a 
          href="mailto:diyakarmakar365@gmail.com" 
          className='bg-[#2f2f2f] hover:bg-gray-400 rounded-full p-3 cursor-pointer'
        >
          <SiGmail className='fill-white size-6' />
        </a>
        <a 
          href="https://github.com/diya94" 
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-[#2f2f2f] hover:bg-gray-400 rounded-full p-3 cursor-pointer'
        >
          <FaGithub className='fill-white size-6' />
        </a>
      </div>

      <p className='text-gray-300 text-[15px] text-center font-poppins leading-8'>
        Copyright 2025, All Rights Reserved
      </p>

      <div id='icon-box' className='bg-gray-300 text-white p-1 rounded-full hover:bg-slate-500 hover:text-themeblack cursor-pointer fixed bottom-4 right-4'>
        <Link to='scroll' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-4 ' />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
