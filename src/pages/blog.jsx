import React from 'react'
import Navbar from './Navbar';
import Footer from './footer';

const Blog = () => {
    const blog = [
        {
          title: "Blog Post: The Art of Storytelling",
          img:'https://www.chidinmaofoegbu.com/wp-content/uploads/2023/08/20230809_111536_0000-768x768.png',
          description: "Explored the importance of storytelling in content creation, engaging readers with compelling narratives.",
          link: "https://example.com/blog/the-art-of-storytelling",
        },
        {
          title: "Website Copy: Tech Startup",
          description: "Crafted persuasive website copy for a tech startup, highlighting their products and unique value propositions.",
          link: "https://examplestartup.com",
        },
        {
          title: "Article: Digital Marketing Trends",
          description: "Researched and wrote an informative article on the latest digital marketing trends shaping the industry.",
          link: "https://example.com/articles/digital-marketing-trends",
        }
        ,
        {
          title: "Article: Digital Marketing Trends",
          description: "Researched and wrote an informative article on the latest digital marketing trends shaping the industry.",
          link: "https://example.com/articles/digital-marketing-trends",
        },
        {
          title: "Article: Digital Marketing Trends",
          description: "Researched and wrote an informative article on the latest digital marketing trends shaping the industry.",
          link: "https://example.com/articles/digital-marketing-trends",
        },
        {
          title: "Article: Digital Marketing Trends",
          description: "Researched and wrote an informative article on the latest digital marketing trends shaping the industry.",
          link: "https://example.com/articles/digital-marketing-trends",
        },
        
      ];
    
      return (
        <>
        <Navbar />

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto p-4">
            <h2 className="text-5xl font-bold mb-8 text-center">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
              {blog.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-md shadow-4xl">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <img 
                  className='w-full'
                  src={project.img} 
                  alt="projectIMG" />
                  <p className="text-gray-700 mb-4"><code>{project.description}</code></p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 p-1 rounded-2xl hover:p-1 hover:border-2 hover:border-blue-800"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        </>
  )
}

export default Blog
