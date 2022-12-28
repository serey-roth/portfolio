import React from 'react'
import Project from './Project'

const Projects = ({ projects }) => {
    return (
        <div 
        id='projects' 
        className='w-screen min-h-screen pt-20 px-10 xl:w-[80%]'>
            <h1 className='font-bold text-3xl lg:text-5xl py-2 mb-2'>Projects</h1>
            <div className='flex flex-col md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            2xl:grid-cols-5 place-items-stretch gap-3'>
                {projects.map(project => (
                    <Project key={project._id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects