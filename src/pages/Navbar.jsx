import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProgramsDropdown = () => {
    setIsProgramsOpen(!isProgramsOpen);
  };
  return (
    <nav className='sticky py-2 bg-black flex items-center lg:py-4 lg:px-8  lg:place-content-around place-content-between'>
    <div>
      {/* Navbar brand should be a link */}
      <Link to='/'>
        <span className="w-[180px] text-white text-3xl font-extrabold pl-4">George</span>
        <span className="w-[180px] text-blue-500 text-3xl">Writes </span>
      </Link>
    </div>
    {/* For responsiveness */}
    <div className='relative justify-end'>
      {/* Hamburger Menu */}
      <button
        className='text-blue-900 flex focus:outline-none lg:hidden mr-5 '
        onClick={toggleMenu}
      >
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {isMenuOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <>
          <div
            className='fixed inset-0 bg-black opacity-50 z-40'
            onClick={toggleMenu}
          ></div>
          <div className='fixed top-0 left-0 h-full w-3/5 bg-blue-950 opacity-95  border-l border-gray-300 shadow-lg z-50 transition ease-in-out duration-500 transform translate-x-0 '>
            <ul className='py-4 text-white'>
              <li className='px-6 py-3  hover:bg-blue-500'>
                <Link to='/'>
                  <h5>Home</h5>
                </Link>
              </li>
              <li className='px-6 py-3  hover:bg-blue-500'>
                <Link to='/about'>
                  <h5>About</h5>
                </Link>
              </li>
              <li className='px-6 py-3  hover:bg-blue-500'>
                <span onClick={toggleProgramsDropdown}>Services</span>
                {isProgramsOpen && (
                  <ul>
                    <li className='px-6 py-3 hover:bg-blue-600'>
                      <Link to='/blog'>Content Writing</Link>
                    </li>
                    <li className='px-6 py-3 hover:bg-blue-600'>
                      <Link to='/voice'>Voiceover</Link>
                    </li>
                  </ul>
                )}
              </li>
            
              {/* <li className='px-6 py-3  hover:bg-blue-500'>
                <Link to='/contact'>
                  <h5>Portfolio</h5>
                </Link>
              </li> */}
              <Link to='/contact'>
                <li className='px-4 py-4 bg-blue-700 text-red-400 rounded-md  hover:bg-blue-500'>
                  <h5>CONTACT ME</h5>
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </div>

    {/* full screen display of the navbar */}

    <div
      className={`lg:flex lg:gap-20 text-white justify-evenly hidden `}
    >
      <Link to='/'>
        <h5
          className={`relative hover:text-blue-500 cursor-pointer `}
        >
          Home
        </h5>
      </Link>
      <Link to='/about'>
        <h5
          className={`relative hover:text-blue-500 cursor-pointer `}
        >
          About
        </h5>
      </Link>
      <ul
        className={`relative hover:text-blue-500 cursor-pointer `}
      >
        <span
          onClick={toggleProgramsDropdown}
          // className="cursor-pointer"
        >
          Services
          <svg
            className={`${
              isProgramsOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-300 ml-2 inline transform`}
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M8 10l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L8 10z' />
          </svg>
        </span>
        {isProgramsOpen && (
          <ul className='absolute left-0 top-full bg-white  mt-2 w-48 py-2 z-10 border rounded-lg shadow-lg'>
            <li className='px-4 py-2 hover:bg-blue-300'>
              <Link to='/blog'>
                <h5>Content Writing</h5>
              </Link>
            </li>
            <li className='px-4 py-2 hover:bg-blue-300'>
              <Link to='/voice'>
                <h5>Voiceover</h5>
              </Link>
            </li>
          </ul>
        )}
      </ul>
      
      {/* <Link to='/contact'>
        <h5
          className={`relative hover:text-blue-500 cursor-pointer `}
        >
          Portfolio
        </h5>
      </Link> */}
    </div>

    <div className='cursor-pointer hidden lg:flex lg:px-8 lg:py-2 ml-10  text-white bg-blue-600 rounded-lg hover:bg-blue-800 '>
      <Link to='/contact'>
        <h5 className='md:font-bold text-gray-300'>CONTACT ME</h5>
      </Link>
      </div>
    
  </nav>
  )
}

export default Navbar
