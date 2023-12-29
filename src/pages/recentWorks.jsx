import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const RecentWorks = () => {
    const projects = [
        {
          title: "Blog Post: The Art of Storytelling",
          img:'https://www.pngitem.com/pimgs/m/354-3548349_content-writing-png-content-writing-logo-png-transparent.png',
          description: "Explored the importance of storytelling in content creation, engaging readers with compelling narratives.",
          link: "https://example.com/blog/the-art-of-storytelling",
        },
        {
          title: "Website Copy: Tech Startup",
          img:'https://www.pngitem.com/pimgs/m/354-3548349_content-writing-png-content-writing-logo-png-transparent.png',
          description: "Crafted persuasive website copy for a tech startup, highlighting their products and unique value propositions.",
          link: "https://examplestartup.com",
        },
        {
          title: "Article: Digital Marketing Trends",
          img:'https://www.pngitem.com/pimgs/m/354-3548349_content-writing-png-content-writing-logo-png-transparent.png',
          description: "Researched and wrote an informative article on the latest digital marketing trends shaping the industry.",
          link: "https://example.com/articles/digital-marketing-trends",
        },
        // Add more projects as needed
      ];
      useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    
      return (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto p-4" data-aos="fade-up"
                    data-aos-duration="3000">
            <h2 className="text-5xl font-bold mb-8 text-center" >Recent Work 📝</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="flip-left"
                data-aos-delay="50"
                data-aos-duration="2000">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-200 p-6 rounded-md shadow-4xl" >
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
  )
}

export default RecentWorks
