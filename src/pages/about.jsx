import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
    <Navbar />

        <div className='md:flex mt-[20px] mb-[10px]'>
          <div className='w-full md:w-3/5 flex flex-col align-items-center justify-center mt-10 md:mt-0 p-5'>
            <h1 className='text-black font-clashDisplaySemibold text-[44px]'>
              FREELANCE WRITER
            </h1>
            <p className='text-[#494242] mt-[34px] font-futura text-justify'>
            Hi, I’m GEORGE, Faith Ukamaka, a freelance B2B content writer. I write blog posts and long-form content on tech, food industry and digital marketing topics.

If you want content that engages and delights your readers, then look no further. My writing will get your business more traffic and leads.
            </p>
          </div>
          <div className='w-full md:w-3/5 h-[660px] flex justify-center md:justify-end mt-20 md:mt-0'>
            <img
              src='https://cdn.hashnode.com/res/hashnode/image/upload/v1696929899184/b4764080-a8c2-4f84-bdf6-a933a417a8d5.png'
              width={454.6}
              height={100}
              alt=''
              className='object-cover h-full'
            /> 
          </div>
        </div>
    
      
      <div className='flex flex-col-reverse md:flex md:flex-row'>
        <div className='md:w-2/5 md:h-[500]'>
          <div className="md:w-2/5 md:h-[500] border-2 border-red-500">
          {/* <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1696930054614/11152d10-18e6-40f1-8d10-95fe40836d66.png'
            width={628}
            height={500}
            alt=''
            className='w-full h-full object-cover'
            // className="w-full h-full md:w-[628px] md:h-[500px] object-cover"
          /> */}
        </div>
        <div className=' bg-[#092F6E] md:flex justify-center md:items-center md:justify-center'>
          <div className='w-full md:w-full lg:md:max-w-[80%] p-4'>
            <h2 className='text-white text-center font-clashDisplaySemibold text-[44px] mt-2 md:mt-0'>
            Finding someone who can write is easy.
            </h2>
            <p className='text-[#D9D9D9] mt-[4px] mb-10 md:mb-10 tracking-wider font-futura'>
            But how about finding someone who writes well, has the industry expertise and understands content marketing? That’s where it gets tricky.
Fortunately, you’re in the right place! I am your go-to B2B content writer for all tech, food industry or digital marketing content.

I am the writer you hire when you’ve done all the planning and need someone to follow the brief and deliver 100 percent premium content that drives targeted search traffic to your website.


            </p>
          </div>
        </div></div></div>


         {/* What we offer section section starts here */}
     <div className='mt-[30px]'>
         <p className='text-[#092F6E] uppercase font-futura mb-[20px] text-[20px] font-extrabold tracking-tighter text-center'>
           what I offer
         </p>
         <h1 className='font-clashDisplaySemibold text-[50px] text-[#0D0D0D] mb-[30px] relative max-w-[500px] mx-auto text-center'>
           Learn more about <br /> my service
           <svg
             className='mt-40 w-full lg:w-[412px] h-[63px] absolute left-0 lg:left-[60px] bottom-[19px]'
             viewBox='0 0 412 63'
             fill='none'
             xmlns='http://www.w3.org/2000/svg'
           >
             <path
               d='M3 17.932C31.1667 42.2653 111 81.432 205 43.432C322.5 -4.068 408.5 3.432 408.5 3.432'
               stroke='#BA2008'
              strokeWidth='6'
              strokeLinecap='round'
            />
          </svg>
        </h1>

         <div className='overflow-hidden max-w-[1124.53px] px-4 md:px-0 mx-auto'>
           <div className='flex flex-col md:flex-row lg:justify-between mt-[100px]'>
             <div className='service-card w-full md:w-[357px] h-[440px] relative mb-5'>
               <h1 className='font-clashDisplaySemibold text-black text-[36px] text-center w-full absolute left-0 bottom-10'>
                 Talent Development
               </h1>
               <div className='service-card-overlay shadow-lg'>
              <p className='font-clashDisplaySemibold text-black text-[28px] text-center'>
                 we identify young people across various geopolitical zones and
                   create a platform to create technical skills that will enable
                   them build client-centric and solution driven projects
                 </p>
               </div>
             </div>
             <div className='service-card2 w-full md:w-[357px] h-[440px] relative mb-5'>
               <h1 className='font-clashDisplaySemibold text-black text-[40px] text-center w-full absolute left-0 bottom-10'>
                 Advisory Service
               </h1>
               <div className='service-card-overlay2'>
                 <p className='font-clashDisplaySemibold text-black text-[28px] text-center'>
                   we identify young people across various geopolitical zones and
                   create a platform to create technical skills that will enable
                   them build client-centric and solution driven projects
                 </p>
               </div>
             </div>
             <div className='service-card3 w-full md:w-[357px] h-[440px] relative mb-5'>
               <h1 className='font-clashDisplaySemibold text-black text-[40px] text-center w-full absolute left-0 bottom-10'>
                 Venture Building
               </h1>
               <div className='service-card-overlay3'>
                 <p className='font-clashDisplaySemibold text-black text-[28px] text-center'>
                   we identify young people across various geopolitical zones and
                   create a platform to create technical skills that will enable
                   them build client-centric and solution driven projects
                 </p>
               </div>
            </div>
           </div>

           <div className='flex flex-col md:flex-row lg:justify-between mb-32'>
             <div className='service-card4 w-full md:w-[357px] h-[440px] relative mb-5'>
               <h1 className='font-clashDisplaySemibold text-black text-[40px] text-center w-full absolute left-0 bottom-10'>
                 Product Development
               </h1>
               <div className='service-card-overlay4'>
                 <p className='font-clashDisplaySemibold text-black text-[28px] text-center'>
                   we identify young people across various geopolitical zones and
                   create a platform to create technical skills that will enable
                   them build client-centric and solution driven projects
                 </p>
               </div>
             </div>
             <div className='service-card5 w-full md:w-[357px] h-[440px] relative mb-5'>
               <h1 className='font-clashDisplaySemibold text-black text-[40px] text-center w-full absolute left-0 bottom-10'>
                 Talent Placement
               </h1>
               <div className='service-card-overlay5'>
                 <p className='font-clashDisplaySemibold text-black text-[28px] text-center'>
                   we identify young people across various geopolitical zones and
                 create a platform to create technical skills that will enable
                   them build client-centric and solution driven projects
                 </p>
               </div>
             </div>
             <div className='service-card6 w-full md:w-[357px] h-[440px] relative mb-5'>
               <h1 className='font-clashDisplaySemibold text-white text-[40px] text-center w-full absolute left-0 bottom-10'>
                 Professional Training
               </h1>
               <div className='service-card-overlay6'>
                 <p className='font-clashDisplaySemibold text-white text-[28px] text-center'>
                   we identify young people across various geopolitical zones and
                 create a platform to create technical skills that will enable
                   them build client-centric and solution driven projects
                 </p>
               </div>
             </div>
           </div>
         </div></div>

        </>
    
      
    //   {/* Partener with us section starts here */}
    //   <div className='pt-[90px] pb-[90px] px-8 lg:px-0'>
    //     <h1 className='text-[#0D0D0D] text-center text-[48px] font-clashDisplaySemibold'>
    //       Partner with us
    //     </h1>
    //     <p className='text-[#494242] text-center font-futura mb-[24px]'>
    //       Join our team, At TIIDELab, we raise self-reliant youths and
    //       it&rsquo;s our joy to welcome you on board.Become a sponsor today.
    //     </p>
    //     <div className='flex justify-center'>
    //       <Link href='/sponsor'>
    //         <button className='flex items-center px-[14px] py-[10px] bg-[#092F6E] rounded-lg'>
    //           Become a Sponsor
    //           <Image
    //             src='https://cdn.hashnode.com/res/hashnode/image/upload/v1697030481080/8815a265-e3de-4122-8777-1c77535b3f4c.png'
    //             alt=''
    //             width={30}
    //             height={30}
    //             className='ms-2'
    //           />
    //         </button>
    //       </Link>
    //     </div>
    //   </div>

    //   {/* What we offer section section starts here */}
    //   <div className='mb-[80px]'>
    //     <p className='text-[#092F6E] uppercase font-futura mb-[20px] text-[20px] font-extrabold tracking-tighter text-center'>
    //       what we offer
    //     </p>
    //     <h1 className='font-clashDisplaySemibold text-[50px] text-[#0D0D0D] mb-[30px] relative max-w-[500px] mx-auto text-center'>
    //       Learn more about <br /> our service
    //       <svg
    //         className='w-full lg:w-[412px] h-[63px] absolute left-0 lg:left-[60px] bottom-[-19px]'
    //         viewBox='0 0 412 63'
    //         fill='none'
    //         xmlns='http://www.w3.org/2000/svg'
    //       >
    //         <path
    //           d='M3 17.932C31.1667 42.2653 111 81.432 205 43.432C322.5 -4.068 408.5 3.432 408.5 3.432'
    //           stroke='#BA2008'
    //           strokeWidth='6'
    //           strokeLinecap='round'
    //         />
    //       </svg>
    //     </h1>

    //     <div className='overflow-hidden max-w-[1124.53px] px-4 md:px-0 mx-auto'>
    //       <div className='flex flex-col md:flex-row lg:justify-between mt-[100px]'>
    //         <div className='service-card w-full md:w-[357px] h-[440px] relative mb-5'>
    //           <h1 className='font-clashDisplaySemibold text-white text-[36px] text-center w-full absolute left-0 bottom-10'>
    //             Talent Development
    //           </h1>
    //           <div className='service-card-overlay'>
    //             <p className='font-clashDisplaySemibold text-white text-[28px] text-center'>
    //               we identify young people across various geopolitical zones and
    //               create a platform to create technical skills that will enable
    //               them build client-centric and solution driven projects
    //             </p>
    //           </div>
    //         </div>
    //         <div className='service-card2 w-full md:w-[357px] h-[440px] relative mb-5'>
    //           <h1 className='font-clashDisplaySemibold text-white text-[40px] text-center w-full absolute left-0 bottom-10'>
    //             Advisory Service
    //           </h1>
    //           <div className='service-card-overlay2'>
    //             <p className='font-clashDisplaySemibold text-white text-[28px] text-center'>
    //               we identify young people across various geopolitical zones and
    //               create a platform to create technical skills that will enable
    //               them build client-centric and solution driven projects
    //             </p>
    //           </div>
    //         </div>
    //         <div className='service-card3 w-full md:w-[357px] h-[440px] relative mb-5'>
    //           <h1 className='font-clashDisplaySemibold text-white text-[40px] text-center w-full absolute left-0 bottom-10'>
    //             Venture Building
    //           </h1>
    //           <div className='service-card-overlay3'>
    //             <p className='font-clashDisplaySemibold text-white text-[28px] text-center'>
    //               we identify young people across various geopolitical zones and
    //               create a platform to create technical skills that will enable
    //               them build client-centric and solution driven projects
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className='flex flex-col md:flex-row lg:justify-between mb-32'>
    //         <div className='service-card4 w-full md:w-[357px] h-[440px] relative mb-5'>
    //           <h1 className='font-clashDisplaySemibold text-white text-[40px] text-center w-full absolute left-0 bottom-10'>
    //             Product Development
    //           </h1>
    //           <div className='service-card-overlay4'>
    //             <p className='font-clashDisplaySemibold text-white text-[28px] text-center'>
    //               we identify young people across various geopolitical zones and
    //               create a platform to create technical skills that will enable
    //               them build client-centric and solution driven projects
    //             </p>
    //           </div>
    //         </div>
    //         <div className='service-card5 w-full md:w-[357px] h-[440px] relative mb-5'>
    //           <h1 className='font-clashDisplaySemibold text-white text-[40px] text-center w-full absolute left-0 bottom-10'>
    //             Talent Placement
    //           </h1>
    //           <div className='service-card-overlay5'>
    //             <p className='font-clashDisplaySemibold text-white text-[28px] text-center'>
    //               we identify young people across various geopolitical zones and
    //               create a platform to create technical skills that will enable
    //               them build client-centric and solution driven projects
    //             </p>
    //           </div>
    //         </div>
    //         <div className='service-card6 w-full md:w-[357px] h-[440px] relative mb-5'>
    //           <h1 className='font-clashDisplaySemibold text-white text-[40px] text-center w-full absolute left-0 bottom-10'>
    //             Professional Training
    //           </h1>
    //           <div className='service-card-overlay6'>
    //             <p className='font-clashDisplaySemibold text-white text-[28px] text-center'>
    //               we identify young people across various geopolitical zones and
    //               create a platform to create technical skills that will enable
    //               them build client-centric and solution driven projects
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Team and success stories section */}
    //     <div className='md:flex'>
    //       <div className='meet-our-team-block w-full md:w-2/4 h-[500px] flex items-center justify-center border-r-2 border-[#092F6E]'>
    //         <Link href='/team'>
    //           <button className='p-[8px] text-[28px] font-clashDisplaySemibold text-[#6E1C10] border-2 border-[#6E1C10]'>
    //             Meet Our Team
    //           </button>
    //         </Link>
    //       </div>
    //       <div className='success-stories-block w-full md:w-2/4 h-[500px] mt-4 md:mt-0 flex items-center justify-center border-l-2 border-[#092F6E]'>
    //         <Link href='/stories'>
    //           <button className='p-[8px] text-[28px] font-clashDisplaySemibold text-[#6E1C10] border-2 border-[#6E1C10]'>
    //             Success Stories
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

  )
}

export default About
