import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

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
    <nav className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-screen-xl ml-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center ml-10">
          <img src="/Jules T. Fagard.svg" alt="Logo" width={200} color='white' className='' style={{ fill: "yellow" }} />
        </a>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/timeline" className="hover:text-gray-300">Timeline</a>
          <a href="/projects" className="hover:text-gray-300">Projects</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
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
          <a href="/about" className="block py-2 hover:text-gray-300">About</a>
          <a href="/timeline" className="block py-2 hover:text-gray-300">Timeline</a>
          <a href="/projects" className="block py-2 hover:text-gray-300">Projects</a>
          <a href="/contact" className="block py-2 hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
    // <div className="bg-secondary-light dark:bg-primary-dark text-black dark:text-white transition duration-300">
    //   <nav id="nav" className="md:container md:mx-auto" style={{ opacity: 1 }}>
    //     <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block md:flex md:justify-between md:items-center py-6">
    //       <div className="flex justify-between items-center px-4 md:px-0">
    //         <div>
    //           <a href="/">
    //             {
    //               isDarkMode ? (<img src="/static/media/logo-dark.da150d1d.svg" className="w-36 dark:text-white" alt="Logo for Dark Mode" />)
    //                 : (<img src="/static/media/logo-dark.da150d1d.svg" className="w-36 dark:text-black" alt="Logo for Light Mode" />)
    //             }
    //           </a>
    //         </div>
    //         <div className="block md:hidden ml-0 bg-primary-light dark:bg-white p-3 shadow-sm rounded-xl cursor-pointer" onClick={toggleDarkMode}>
    //           {isDarkMode ? <FaSun className="text-yellow-500 dark:text-yellow-300 hover:text-yellow-400 dark:hover:text-yellow-200 text-xl" /> : <FaMoon className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 text-xl" />}
    //         </div>
    //         <div className="md:hidden">
    //           <button type="button" className="focus:outline-none" aria-label="Hamburger Menu" onClick={toggleMenu}>
    //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
    //               <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //                 <line x1="3" y1="12" x2="21" y2="12">
    //                 </line>
    //                 <line x1="3" y1="6" x2="21" y2="6">
    //                 </line>
    //                 <line x1="3" y1="18" x2="21" y2="18">
    //                 </line>
    //               </svg>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
    //         <a className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-4 mb-2 md:py-2" aria-label="Projects" href="/projects">
    //           Projects
    //         </a>
    //         <a className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-4 mb-2 md:py-2 border-t-2 pt-3 md:pt-2 md:border-t-0 border-primary-light dark:border-secondary-dark" aria-label="About Me" href="/about">
    //           About Me
    //         </a>
    //         <a className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-4 mb-2 md:py-2 border-t-2 pt-3 md:pt-2 md:border-t-0 border-primary-light dark:border-secondary-dark" aria-label="Contact" href="/contact">
    //           Contact
    //         </a>
    //         <div className="border-t-2 pt-3 md:pt-0 md:border-t-0 border-primary-light dark:border-secondary-dark">
    //           <span className="font-general-medium md:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24" aria-label="Hire Me Button">
    //             <button>
    //               Hire Me
    //             </button>
    //           </span>
    //         </div>
    //       </div>
    //       <div className="font-general-medium hidden m-0 md:ml-4 mt-5 md:mt-3 md:flex p-5 md:p-0 justify-center items-center shadow-lg md:shadow-none">
    //         <a className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-4 mb-2 md:py-2" aria-label="Projects" href="/projects">
    //           Projects
    //         </a>
    //         <a className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-4 mb-2 md:py-2" aria-label="About Me" href="/about">
    //           About Me
    //         </a>
    //         <a className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-4 mb-2 md:py-2" aria-label="Contact" href="/contact">
    //           Contact
    //         </a>
    //       </div>
    //       <div className="hidden md:flex justify-between items-center flex-col md:flex-row">
    //         <div className="hidden md:flex">
    //           <a download="Jules-Resume.pdf" href="/files/Jules-Resume.pdf" className="font-general-medium flex justify-center items-center w-36 md:w-48 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 md:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Download Resume">
    //             <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2 md:mr-3 h-5 w-5 sn:w-6 md:h-6 duration-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //               <circle cx="12" cy="12" r="10"></circle>
    //               <polyline points="8 12 12 16 16 12"></polyline>
    //               <line x1="12" y1="8" x2="12" y2="16"></line>
    //             </svg>
    //             <span className="text-sm md:text-lg font-general-medium duration-100">Download CV</span>
    //           </a>
    //         </div>
    //         <div aria-label="Theme Switcher" className="ml-8 bg-primary-light dark:bg-white text-yellow-400 hover:text-yellow-500 p-3 shadow-sm rounded-full cursor-pointer"
    //           onClick={toggleDarkMode}
    //           onMouseEnter={() => setIsDarkModeToggleHovered(true)}
    //           onMouseLeave={() => setIsDarkModeToggleHovered(false)}
    //           style={{ transform: isDarkModeToggleHovered ? `rotate(${isDarkMode ? '15' : '-15'}deg)` : "none" }}>
    //           {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 text-xl" />}
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
