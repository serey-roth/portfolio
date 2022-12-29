import React from 'react';
import { 
    AiFillLinkedin, 
    AiFillGithub, 
    AiFillFacebook, 
    AiFillInstagram 
} from 'react-icons/ai';
import { motion } from 'framer-motion';

import { urlFor } from '../lib';

const Hero = React.forwardRef(({ 
    hero: { description, photo, tags } 
}, ref) => {
    return (
        <div
        ref={ref}
        id='home'
        className='section min-h-screen items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-5
            lg:grid grid-cols-2 lg:place-content-center w-full'>
                <div className='flex flex-col items-center justify-center lg:justify-start
                gap-5'>
                    <h2 className='font-bold text-2xl mobile-lg:text-4xl
                    md:text-5xl 2xl:text-8xl text-center lg:text-left w-full'>
                        Hi! I am
                        <span 
                            className='lg:text-7xl 2xl:text-9xl 
                            bg-clip-text text-transparent 
                            bg-gradient-to-tr from-indigo-600 to-teal-300'>
                            <br className='hidden lg:block'/> Serey Roth
                        </span>.
                    </h2>
                    <div className='flex w-full items-start justify-center 
                    lg:justify-start gap-2 2xl:text-3xl'>
                        {tags.map((title, index) => (
                            <p key={index} className='w-fit text-center capitalize 
                            rounded-l-full rounded-r-full drop-shadow-2xl
                            bg-teal-500 text-white font-semibold 
                            px-3 py-2 2xl:px-5 2xl:py-4'>
                                {title}
                            </p>
                        ))}
                    </div>
                    <p className='w-full text-center lg:text-left 2xl:text-2xl'>
                        {description}
                    </p>
                    <div className='flex w-full items-center justify-center lg:justify-start gap-5'>
                        <AiFillLinkedin size={30} className='text-indigo-500'/>
                        <AiFillGithub size={30} className='text-indigo-500'/>
                        <AiFillFacebook size={30} className='text-indigo-500'/>
                        <AiFillInstagram size={30} className='text-indigo-500'/>
                    </div>
                </div>
                <div className='relative bg-gradient-to-br from-indigo-900 shadow-inner
                shadow-black flex items-center justify-center h-[250px]
                rounded-full w-[250px] mobile-lg:w-[300px] mobile-lg:h-[300px]
                md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px]
                xl:w-[600px] xl:h-[600px] 2xl:w-[900px]
                2xl:h-[900px] overflow-hidden'>
                    <motion.img
                    src={urlFor(photo).url()}
                    alt='headshot' 
                    className='absolute bottom-0 
                    xl:scale-105 xl:bottom-4 2xl:scale-[160%]
                    2xl:bottom-[9rem]'
                    />
                </div>
            </div>
        </div>
    )
});

export default Hero;