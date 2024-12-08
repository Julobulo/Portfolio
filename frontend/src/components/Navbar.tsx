import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const handleScroll = (to: string) => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-slate-600 dark:bg-slate-800 text-white shadow-lg">
      <div className="max-w-screen-xl ml-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center ml-10">
          <img src="/Jules T. Fagard.svg" alt="Logo" width={200} color='white' className='' style={{ fill: "yellow" }} />
        </a>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleScroll('about')} className="hover:text-gray-300">About</button>
          {/* <a href="/timeline" className="hover:text-gray-300">Timeline</a> */}
          <button onClick={() => handleScroll('projects')} className="hover:text-gray-300">Projects</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-gray-300">Contact</button>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="rounded-full focus:outline-none"
        >
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Navigation Links for Small Screens */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pb-4">
          <button onClick={() => handleScroll('about')} className="hover:text-gray-300">About</button>
          {/* <a href="/timeline" className="hover:text-gray-300">Timeline</a> */}
          <button onClick={() => handleScroll('projects')} className="hover:text-gray-300">Projects</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-gray-300">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
