import React, { useEffect } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaRobot, FaChartLine } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { FiDatabase } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = {
  title: "My Skills",
  description:
    "My Skills Includes",
  skillList: [
    { icons: <FaHtml5 />, name: "Html" },
    { icons: <FaCss3 />, name: "css3" },
    { icons: <FaJs />, name: "JavaScript" },
    { icons: <FaReact />, name: "React" },
    { icons: <FaPython />, name: "Python" },
    { icons: <TbBrandCpp />, name: "C++" },
    { icons: <FiDatabase />, name: "SQL" },
    { icons: <FaRobot />, name: "Artificial Intelligence" },
    { icons: <FaChartLine />, name: "Machine Learning" },
  ]
};

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div id='about' className="w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px] h-full flex flex-col justify-between bg-blue-950 items-start gap-[100px]">
      <div className="w-full flex flex-col justify-center items-start gap-6">
        <h2 data-aos="zoom-in" className="text-4xl uppercase text-white font-sans font-semibold">
          About me
        </h2>
        <div data-aos="zoom-in" className='bg-themered h-[3px] w-20'></div>
        <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-300 text-full font-poppins'>
          A highly motivated Computer Science Student specializing in Artificial Intelligence and Machine Learning. Passionate about Software Development Problem-solving, Machine learning. My Skills includes Python, C++, Data Structure, AIML. Seeking opportunities to apply and expand my technical skills in a professional setting.
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center gap-6">
          <h2 data-aos="zoom-in" className="text-4xl uppercase text-white font-sans font-semibold">
            Skills
          </h2>
          <p data-aos="zoom-in" className="text-gray-300 text-lg font-poppins">{skills.description}</p>

          <div className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ,t-4">
            {skills.skillList.map((skill, index) => (
              <div key={index}
                   data-aos="fade-up"
                   data-aos-delay={`${index * 100}`}
                   className="flex flex-col items-start justify-center text-white text-3xl">
                  <div className="bg-[#2f2f2f] p-4 rounded-full hover:scale-110 hover:bg-gray-400">{skill.icons}</div>
                  <span className="text-base font-poppins mt-2">{skill.name}</span>
                  </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center gap-6">
          <h2 data-aos="zoom-in" className="text-4xl uppercase text-white font-sans font-semibold">
            Goals
          </h2>
          <p data-aos="zoom-in" className="text-gray-300 text-lg font-poppins">
            My goal is to become a skilled and impactful software engineer or AI/ML developer who builds real-world solutions that make a difference. I aim to keep learning and improving through hands-on projects, internships, and collaboration with like-minded professionals. In the long run, I aspire to contribute to cutting-edge technologies in artificial intelligence, data science, and product development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
