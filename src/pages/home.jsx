import React, { } from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import RecentWorks from './recentWorks';

const Home = (props) => {
  const clients = [
    "Leo Tech Ltd",
    "IMT Law Dept",
    "Client C",
    // Add more clients as needed
  ];

  const partners = [
    "Partner X",
    "Partner Y",
    "Partner Z",
    // Add more partners as needed
  ];
    
  return (
    <div>
      <Navbar />
      <header className="h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("")' }}>
       <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">GEORGE Amaka Faith</h1>
      <p class="text-lg md:text-xl mb-8">Content Creator | Creative Mind | Voice Over Artiste</p>
      <a href="#portfolio" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">View Portfolio</a>
    </div>
  </header>

  

    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
          {/* Service Card 1 */}
          <div className="bg-blue-900 p-6 rounded-md shadow-md text-white m-4">
            <h3 className="text-xl font-semibold mb-4">Content Writing</h3>
            <p className="text-gray-100">
              Crafting engaging and well-researched content tailored to your audience, whether it's blog posts, articles, or website copy.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-blue-900 p-6 rounded-md shadow-md text-white m-4">
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <p className="text-gray-100">
              Optimizing content for search engines to improve visibility and ranking, ensuring your content reaches a wider audience.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-blue-900 p-6 rounded-md shadow-md text-white m-4">
            <h3 className="text-xl font-semibold mb-4">Copywriting</h3>
            <p className="text-gray-100">
              Creating compelling and persuasive copy for marketing materials, advertisements, and promotional content.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-blue-900 p-6 rounded-md shadow-md text-white m-4">
            <h3 className="text-xl font-semibold mb-4">Social Media Content</h3>
            <p className="text-gray-100">
              Developing engaging and shareable content for social media platforms to enhance your online presence and connect with your audience.
            </p>
          </div>

          {/* Add more service cards as needed */}
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        {/* People I Have Worked For Section */}
        <div className="mb-12">
          <h2 className="text-5xl font-semibold mb-4 text-center">People I Have Worked For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md text-center hover:shadow-xl transition duration-300">
                <p className="text-gray-700">{client}</p>
              </div>
            ))}
          </div>
        </div>

        <RecentWorks />

        {/* Partners Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Partners</h2>
          <ul className="list-disc pl-6">
            {partners.map((partner, index) => (
              <li key={index} className="text-gray-700">{partner}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  <Footer />
        </div>
  )
}

export default Home
