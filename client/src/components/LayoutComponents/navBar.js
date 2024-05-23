import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithHover from './ImageWithHover';

 // Ensure this path is correct and the logo exists

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black py-2">
      <div className="max-w-screen-xl flex flex-wrap items-right justify-between mx-auto p-4">
      <ImageWithHover
    src1="logos/driver0.png"
    to1="/showroom"
    src2="logos/helmet.png"
    to2="/"
    alt="Image"
  />
        
        <div className="flex md:order-1">

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
</div>
</div>
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black md:dark:bg-black dark:border-gray-700">
  <li className="mb-2 md:mb-0">
    <Link to="/" className="block py-2 px-3 rounded md:rounded text-xl font-bold text-white bg-black md:bg-transparent md:text-white md:p-w md:dark:text-white hover:text-white hover:bg-gray-700" aria-current="page">Home</Link>
  </li>
  <li className="mb-2 md:mb-0">
    <Link to="/grandprix" className="block py-2 px-3 rounded md:rounded text-xl font-bold text-white bg-black md:bg-transparent md:text-white md:p-w md:dark:text-white hover:text-white hover:bg-gray-700" aria-current="page">Grandprix</Link>
  </li>
  <li className="mb-2 md:mb-0">
    <Link to="/about" className="block py-2 px-3 rounded md:rounded text-xl font-bold text-white bg-black md:bg-transparent md:text-white md:p-w md:dark:text-white hover:text-white hover:bg-gray-700" aria-current="page">About</Link>
  </li>
</ul>
</div>


      </div>
    </nav>
  );
};

export default NavBar;
