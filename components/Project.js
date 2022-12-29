import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '../lib';
import ImageSlider from './ImageSlider';

const Project = ({ project }) => {    
    return (
        <div className='flex flex-col border drop-shadow-2xl shadow-xl
        shadow-black/30 rounded-xl relative group'>
            <h3 className='font-semibold text-xl text-center w-full py-2
            bg-gradient-to-r from-indigo-300 to-teal-300 text-white
            rounded-t-xl'>{project.name}</h3>
            <ImageSlider
                images={project.images}
            />
            <div className='px-4 py-2 flex flex-col flex-1'>
                <p className='mb-2 text-lg'>{project.description}</p>
                <div className='grid grid-cols-4 place-content-start 
                place-items-center gap-2 py-2 mb-2 flex-1 w-full'>
                    {project.tools.map(tool => (
                        <Image
                        key={tool.name}
                        src={urlFor(tool.icon).url()}
                        alt={tool.name}
                        width={200}
                        height={200}
                        classes='max-w-[50px] max-h-[50px]'
                        />
                    ))}
                </div>
                <div className='flex w-full items-center justify-between'>
                    <Link href={project.link_demo}>Demo</Link>
                    <Link href={project.link_source}>Source</Link>
                </div>
            </div>
            <div className='absolute inset-0 bg-black/80 text-white backdrop-blur-xl
            group-hover:opacity-0 group-hover:-z-10 ease-in-out duration-300 rounded-lg
            break-words z-[5]'>
                <h3 className='absolute bottom-4 left-2 right-0 max-w-[90%]
                font-bold text-4xl pl-2 pb-2'>{project.name}</h3>
            </div>
        </div>
    )
};

export default Project;