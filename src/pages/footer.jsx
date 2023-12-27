import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  let year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto text-center">
      <p className="text-lg mb-4">Connect with me on social media:</p>

<div className="flex space-x-8 text-center justify-center">
          <Link to="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
          <i class="fi fi-brands-twitter text-3xl  hover:text-blue-600"></i>
          </Link>
          <Link to="https://linkedin.com/in/your_linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-linkedin text-3xl hover:text-blue-400"></i>
          </Link>
          <Link to="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
            <i className="fi fi-brands-instagram text-3xl hover:text-pink-500"></i>
          </Link>
        </div>
      <p className="mt-4">&copy; {year} All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
