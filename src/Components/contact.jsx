import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const formInitialDetails = {
  firstName: '',
  lastName: '',
  email: '',
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
    
    // Simulate sending
    setTimeout(() => {
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
      setButtonText("Send");
    }, 1000);
  };

  return (
    <div id="contact" className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center rounded gap-5'>
      <div data-aos="zoom-in" className='w-full bg-[#2f2f2f] flex flex-col justify-between items-center lg:p-20 p-8 rounded-lg'>
        <h1 className='text-white w-full text-[30px] lg:text-[35px] leading-10 text-center font-semibold font-poppins mb-8'>
          Contact Me
        </h1>
        
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
          <div className='flex flex-col lg:flex-row gap-4'>
            <input
              type="text"
              placeholder="First Name"
              className='w-full p-3 rounded outline-none'
              value={formDetails.firstName}
              onChange={(e) => onFormUpdate('firstName', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className='w-full p-3 rounded outline-none'
              value={formDetails.lastName}
              onChange={(e) => onFormUpdate('lastName', e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className='w-full p-3 rounded outline-none'
            value={formDetails.email}
            onChange={(e) => onFormUpdate('email', e.target.value)}
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className='w-full p-3 rounded outline-none'
            value={formDetails.message}
            onChange={(e) => onFormUpdate('message', e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-themered hover:bg-white text-white hover:text-themered font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300"
          >
            {buttonText}
          </button>
        </form>

        {status.message && (
          <p className={`mt-4 text-${status.success ? 'green' : 'red'}-500 font-medium`}>
            {status.message}
          </p>
        )}

        <div className="contact-info px-5 py-8 text-white font-poppins" >
            <p><strong>Email:</strong> yourmail@example.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> Durgapur, West Bengal</p>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
