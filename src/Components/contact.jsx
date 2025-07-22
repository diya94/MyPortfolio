import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contactImage from '../assets/contact-img.png'; 

const formInitialDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
};

const Contact = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    setTimeout(() => {
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
      setButtonText("Send");
    }, 1000);
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen py-16 px-8 lg:px-32 bg-blue-950 text-white font-poppins"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div data-aos="fade-right" className="lg:w-1/2 w-full flex justify-center">
          <img src={contactImage} alt="contact illustration" className="w-[90%] max-w-[450px]" />
        </div>

        <div data-aos="fade-left" className="lg:w-1/2 w-full bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white text-center mb-6">
            Contact me
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-md outline-none text-black"
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate('firstName', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-md outline-none text-black"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate('lastName', e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md outline-none text-black"
                value={formDetails.email}
                onChange={(e) => onFormUpdate('email', e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full p-3 rounded-md outline-none text-black"
                value={formDetails.phone}
                onChange={(e) => onFormUpdate('phone', e.target.value)}
              />
            </div>
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-3 rounded-md outline-none text-black"
              value={formDetails.message}
              onChange={(e) => onFormUpdate('message', e.target.value)}
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-pink-800 font-bold px-8 py-3 rounded-md hover:bg-purple-100 transition-all duration-300"
              >
                {buttonText}
              </button>
            </div>
          </form>

          {status.message && (
            <p className={`mt-4 text-center text-${status.success ? 'green' : 'red'}-500 font-medium`}>
              {status.message}
            </p>
          )}
          
        </div>
        
      </div>
      <div className="contact-info px-4 py-10 text-white flex flex-col font-poppins justify-center items-center text-center" >
            <h1 className='text-2xl text-blue-300'>CONTACT INFO</h1>
            <p><strong>Email:</strong> diyakarmakar365@gamil.com</p>
            <p><strong>Address:</strong> Durgapur, West Bengal</p>
        </div>
    </div>
  );
};

export default Contact;
