import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto text-center">
      <p className="text-lg mb-4">Connect with me on social media:</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="mt-4">&copy; 2023 Your Website. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
