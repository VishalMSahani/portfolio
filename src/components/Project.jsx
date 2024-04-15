import React from 'react'
import { projects } from '../data'
import Button from './Button'
import { GoLinkExternal } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
  


function Project() {
  return (
    <section className="w-full py-12 lg:py-16 xl:py-24">
      <div className="container px-4 grid items-center justify-center text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">Featured 
          <span className='text-Pink'> Projects</span></h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400
          text-NavyBlue">
            Here are some of my projects that I've worked on.
          </p>
        </div>
        <div className="">
          <div className="flex lg:flex-wrap justify-center
           gap-8 lg:flex-row ml-3 mr-3 sm:flex-col flex-col">
            {
              projects.map((project , index) => (
                <div className='lg:w-[400px] md:w-[90%] border border-NavyBlue border-opacity-20
                 rounded-md mt-6 shadow-sm'
                key={index}>
                  <img width={400} height={250} className='rounded-md shadow-md'
                   src={project.img} alt={project.title} />
                  <h3 className="text-xl m-3
                  font-semibold tracking-tight">{project.title}</h3>
                  <p className="text-NavyBlue text-opacity-80 text-center ml-6 mr-6">
                    {project.description}
                  </p>
    
                 <div className=' flex items-center justify-center gap-3 mt-4'>
                  <span className='border border-Purple  px-2 py-1 rounded-lg border-opacity-30 
                  hover:bg-Purple hover:bg-opacity-15 '> 
                  {project.technologies[0]}</span>
                  <span className='border border-Purple  px-2 py-1 rounded-lg border-opacity-30 
                  hover:bg-Purple hover:bg-opacity-15 '> 
                  {project.technologies[1]}</span>
                  <span className='border border-Purple  px-2 py-1 rounded-lg border-opacity-30 
                  hover:bg-Purple hover:bg-opacity-15 '> 
                  {project.technologies[2]}</span>
                 
                 </div>
            
                  <div className='flex justify-center items-center m-4 mt-7 gap-5'>
                    
                    <Button link={"/"} text={<>Live Link <GoLinkExternal /></>} active={false}/>
                    <Button link={"/"} text={<>Code <FaCode /></>} active={true}/>
                    
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      </section>

  )
}

export default Project