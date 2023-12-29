import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

const Voiceover = () => {
  return (<>
  <Navbar />
    <div className="container mx-auto text-center p-10">
        <h2 className="text-5xl font-bold mb-6">Professional Voice-Over Services</h2>
        <p className="text-lg mb-8">
          Elevate your content with a captivating voice that leaves a lasting impression. I offer a range of voice-over services tailored to meet your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Voice-Over Service 1 */}
          <div className="bg-blue-500 p-6 rounded-md shadow-md transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl text-white font-bold mb-2">Narration</h3>
            <p className="text-white mb-4">
              Bring your stories to life with engaging and expressive narration for audiobooks, documentaries, and more.
            </p>
          </div>

          {/* Voice-Over Service 2 */}
          <div className="bg-blue-500 p-6 rounded-md shadow-md transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl text-white font-bold mb-2">Commercials</h3>
            <p className="text-white mb-4">
              Create impactful commercials that capture attention and effectively convey your brand message.
            </p>
          </div>

          {/* Voice-Over Service 3 */}
          <div className="bg-blue-500 p-6 rounded-md shadow-md transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl text-white font-bold mb-2">Corporate Narration</h3>
            <p className="text-white mb-4">
              Deliver professional and polished voice-overs for corporate videos, presentations, and training materials.
            </p>
          </div>
        </div>

        <p className="text-lg my-8">
          With a focus on clarity, emotion, and professionalism, I ensure that your message is delivered with the right tone and impact. Let's collaborate to bring your script to life!
        </p>

        {/* Call-to-action button */}
        <a
          href="/contact" // Replace with the actual link to your contact page
          className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
      <Footer />
      </>
  )
}

export default Voiceover
