import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  let year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto text-center">

<div className="flex space-x-8 text-center justify-center">
          <Link to="https://x.com/George_Amakaa" target="_blank" rel="noopener noreferrer">
          <i class="fi fi-brands-twitter text-3xl  hover:text-blue-600"></i>
          </Link>
          <Link to="https://linkedin.com/in/Faith George" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-linkedin text-3xl hover:text-blue-400"></i>
          </Link>
          <Link to="https://facebook.com/george.faith.50" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-facebook text-3xl hover:text-blue-900"></i>
          </Link>
          <Link to="https://instagram.com/georgefaith6" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-instagram text-3xl hover:text-pink-500"></i>
          </Link>
        </div>
      <p className="mt-4">&copy; {year} All rights reserved.</p>
      <small>Designed by:  
      <Link className="text-pink-500 hover:text-pink-300"
       to="https://linkedin.com/in/Ogbajeleo"> Ogbajeleo
       
       </Link>
       </small>
    </div>
  </footer>
  )
}

export default Footer
