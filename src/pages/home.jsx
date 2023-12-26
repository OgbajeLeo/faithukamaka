import React, { } from 'react'
import Navbar from './Navbar'
import Footer from './footer'

const Home = (props) => {
   
    
  return (
    <div>
      <Navbar />
      <header className="h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/fkR6wwz/IMG-20231226-WA0019-removebg-preview.png")' }}>
       <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">GEORGE Ukamaka Faith</h1>
      <p class="text-lg md:text-xl mb-8">Content Creator | Creative Mind | Voice Over Artiste</p>
      <a href="#portfolio" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">View Portfolio</a>
    </div>
  </header>

  <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl font-semibold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
            src="https://i.ibb.co/fkR6wwz/IMG-20231226-WA0019-removebg-preview.png"
            border="0" 
            alt="Profile"
            className="w-full h-[70%] rounded-md ml-8"
            />
          </div>
          <div className='p-4'>
            <p className="text-gray-700 text-lg mb-4 text-justify">
              Hi, I'm UKAMAKA,George Faith, a dedicated freelance content writer based in [Your Location]. With a passion for storytelling and a love for crafting compelling narratives, I bring a unique blend of creativity and expertise to every project I undertake.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Over the years, I've honed my skills in [Your Niche or Specialization], producing content that not only informs but also resonates with the target audience. My writing journey has allowed me to collaborate with a diverse range of clients, from startups to established businesses, helping them communicate their brand voice effectively.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Whether it's creating engaging blog posts, optimizing content for SEO, or developing captivating marketing copy, I take pride in delivering results that make an impact. I stay updated on industry trends and am committed to continuous learning to ensure that my clients receive content that meets the highest standards.
            </p>
            <p className="text-gray-700 text-lg">
              Let's work together to elevate your brand through the power of words. Feel free to reach out if you're looking for a reliable and passionate content writer who can turn your ideas into compelling stories.
            </p>
          </div>
        </div>
      </div>
    </section>


  <Footer />
        </div>
  )
}

export default Home
