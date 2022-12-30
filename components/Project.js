import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '../lib';
import ImageSlider from './ImageSlider';

const Project = ({ project }) => {    
    return (
        <div className='flex flex-col drop-shadow-2xl shadow-sm
        shadow-black/30 dark:shadow-gray-400 rounded-xl relative 
        group bg-gradient-to-b from-indigo-900 dark:from-indigo-700
        dark:to-indigo-200'>
            <h3 className='font-semibold text-xl text-center w-full py-2
            text-white rounded-t-xl md:text-2xl'>{project.name}</h3>
            <ImageSlider
                images={project.images}
            />
            <div className='px-4 py-2 flex flex-col flex-1'>
                <p className='mb-4 text-lg md:text-xl text-center
                w-full text-white'>{project.description}</p>
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
                <div className='flex w-full items-center justify-between
                 dark:text-indigo-700'>
                    <Link 
                    className='font-semibold text-lg'
                    href={project.link_demo}>Demo</Link>
                    <Link 
                    className='font-semibold text-lg'
                    href={project.link_source}>Source</Link>
                </div>
            </div>
            <div className='absolute inset-0 bg-teal-900/80 text-white backdrop-blur-xl
            group-hover:opacity-0 group-hover:-z-10 ease-in-out duration-300 rounded-lg
            break-words z-[5]'>
                <h3 className='absolute bottom-4 left-2 right-0 max-w-[90%]
                font-bold text-4xl pl-2 pb-2'>{project.name}</h3>
            </div>
        </div>
    )
};

export default Project;