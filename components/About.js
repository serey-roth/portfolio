import React from 'react'
import { urlFor } from '../lib/client'
import LoadingImage from './LoadingImage'

const About = React.forwardRef(({ abouts }, ref) => {
    return (
        <div 
        ref={ref}
        id='about' 
        className='w-full pt-20 px-10 xl:w-[80%]'>
            <h1 className='font-bold text-3xl lg:text-5xl py-2 mb-2'>I am a...</h1>
            <div className='flex w-full flex-col md:flex-row md:flex-wrap items-center md:items-start
            justify-center gap-4 pt-10'>
                {abouts.map((item, index) => (
                    <div 
                    key={index}
                    className='flex flex-col items-center max-w-[300px] gap-4 p-2'>
                        <LoadingImage 
                            src={urlFor(item.icon).url()}
                            alt={item.title}
                            height={'300px'}
                            width={'300px'}
                            classes='max-w-[200px] max-h-[200px] drop-shadow-xl' />
                        <h3 className='font-semibold text-xl capitalize'>{item.title}</h3>
                        <p>
                        {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
});

export default About