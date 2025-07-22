import React, {useEffect} from 'react';
import photo from '../assets/photo.jpg';
import designn from '../assets/designn.png';
import Resume from '../assets/Resume.pdf';
import { FiDownload } from 'react-icons/fi';
import AOS from 'aos'
import 'aos/dist/aos.css'

  
const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay:200,
      once: false,
    })
  }, []);

  return (
    <div
      id="scroll"
      className="w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[150px] pt-[120px] h-full flex lg:flex-row flex-col justify-between items-center gap-[100px]"
    >
      <div className="lg:w-3/5 w-full flex flex-col justify-center items-start gap-8">
        <h1 data-aos="" className="text-blue-300 lg:text-3xl text-xl font-semibold font-poppins">
          Hi, Welcome to my Portfolio
        </h1>
        <h2 data-aos="zoom-in" data-aos-delay="200" className="text-gray-300 lg:text-4xl text-lg font-poppins">I'M DIYA KARMAKAR</h2>
        <p data-aos="zoom-in" data-aos-delay="200"className="text-gray-300 lg:text-xl text-lg font-poppins">
          Final-year B.Tech CSE (AI & ML) student passionate about building intelligent systems and real-world tech solutions.
        </p>

        <a
          href={Resume}
          download
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-pink-700 hover:bg-white text-white hover:text-themered font-semibold text-lg px-8 py-3 rounded-lg mt-5 font-poppins inline-flex items-center gap-2"
        >
          <button className="flex items-center gap-2">
           <FiDownload className="text-xl" />Download Resume
          </button>
        </a>

      </div>

      <div data-aos="zoom-in" data-aos-delay="400"className="relative justify-center items-center">
        
        <img
          src={photo}
          alt="photo face"
          className="lg:w-[520px] w-full lg:h-[500px] h-[450px] rounded-full object-cover relative z-20 mx-auto"
        />
        <img src={designn} alt="" className='absolute -top-11 -right-8 z-10 w-[200px] rotate-[20deg]'/> 
      </div>
    </div>
  );
};

export default Home;
