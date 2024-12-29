import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/nav/Small_Brain.png";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false);
  };

  const handleOnIconClick = (url) => {
    window.open(url, '_blank');
  };

  const navItems = [
    { id: 1, text: 'Home', section: 'home-section' },
    { id: 2, text: 'About', section: 'About-section' },
    { id: 3, text: 'Projects & Experience', section: 'projects-section' },
    { id: 4, text: 'Contact', section: 'contact-section' },
  ];

  return (
    <div className='flex justify-between items-center h-24 max-w-screen pl-10 pr-10 mx-auto text-white'>
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
        <span className="text-sm font-semibold ml-2 text-gray-100 font-playwrite">Naira Almelegy</span>
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border border-transparent hover:border-cyan-300 rounded-xl m-2 cursor-pointer duration-300'
            onClick={() => handleScrollToSection(item.section)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo */}
        <div className="flex items-center m-4">
          <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-semibold ml-2 text-gray-100 font-playwrite">Naira Almelegy</span>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            onClick={() => handleScrollToSection(item.section)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex items-center justify-center gap-5 text-xl text-gray-100">
        <FaLinkedin className="hover:text-gray-500 cursor-pointer" onClick={() => handleOnIconClick('https://www.linkedin.com/in/nairaalmelegy853')} />
        <FaGithub className="hover:text-gray-500 cursor-pointer" onClick={() => handleOnIconClick('https://github.com/Nairaalmelegy')}/>
        <FaFacebook className="hover:text-gray-500 cursor-pointer" onClick={() => handleOnIconClick('https://www.facebook.com/profile.php?id=100007580794753&mibextid=ZbWKwL')}/>
      </div>
    </div>
  );
};

export default Navbar;