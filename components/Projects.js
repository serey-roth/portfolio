import React from 'react';
import Project from './Project';

const Projects = React.forwardRef(({ projects }, ref) => {
    return (
        <div 
        ref={ref}
        id='projects' 
        className='section'>
            <h1 className='section-heading'>Projects</h1>
            <div className='flex flex-col md:grid grid-cols-2 lg:grid-cols-3 
            2xl:grid-cols-5 place-items-stretch gap-5'>
                {projects.map(project => (
                    <Project key={project._id} project={project} />
                ))}
            </div>
        </div>
    )
});

export default Projects;