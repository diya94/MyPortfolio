import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { IoCloseSharp } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuLinks = [
    { name: 'Home', to: 'scroll' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
    { name: 'Links', to: 'links' },
  ];

  useEffect(() => {
   const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
  
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 px-7 lg:px-[100px] transition-colors duration-500 ${
        scrolled ? 'bg-pink-900' : 'bg-transparent'
      }`}>
      <div className="flex justify-between items-start">
        <div className="font-bold text-white text-2xl">
          DIYA KARMAKAR <span className="text-blue-800">.</span>
        </div>

        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg font-poppins text-white">
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-themered transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-black text-white transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 p-8 md:hidden`}
      >
        <ul className="space-y-6 text-lg font-poppins">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="block cursor-pointer hover:text-themered"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
