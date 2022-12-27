import React from 'react'
import Project from './Project'

const Projects = ({ projects }) => {
    return (
        <div 
        id='#projects' 
        className='w-full px-5'>
            <h1 className='font-bold text-2xl py-2'>Projects</h1>
            <hr />
            <div>
                {projects.map(project => (
                    <Project key={project._id} />
                ))}
            </div>
        </div>
    )
}

export default Projects