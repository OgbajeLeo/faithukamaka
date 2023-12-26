import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto text-center">
      <p className="text-lg mb-4">Connect with me on social media:</p>

<div className="flex space-x-4 text-center justify-center">
          <Link to="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-3xl hover:text-blue-400"></i>Twitter
          </Link>
          <Link to="https://linkedin.com/in/your_linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-3xl hover:text-blue-400"></i>Linkedin
          </Link>
          <Link to="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-3xl hover:text-pink-500"></i>Instagram
          </Link>
        </div>
      <p className="mt-4">&copy; 2023. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
