import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../lib';

const imageVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    }
};

const aboutVariants = {
    hidden: {
        opacity: 0,
    }, 
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 500,
        }
    }
};

const About = React.forwardRef(({ abouts }, ref) => {
    return (
        <div
        ref={ref}
        id='about' 
        className='section'>
            <h1 className='section-heading'>I am a...</h1>
            <div className='flex w-full flex-col md:flex-row md:flex-wrap items-center md:items-start
            justify-center gap-4 pt-10'>
                {abouts.map((item, index) => (
                    <motion.div 
                    variants={aboutVariants}
                    initial='hidden'
                    whileInView='show'
                    key={index}
                    className='flex flex-col items-center max-w-[300px] gap-4 p-2'>
                        <motion.img 
                            variants={imageVariants}
                            initial='hidden'
                            whileInView='show'
                            src={urlFor(item.icon).url()}
                            alt={item.title}
                            className='max-w-[100px] max-h-[100px]
                            md:max-w-[150px] md:max-h-[150px]
                            xl:max-w-[180px] xl:max-h-[180px] drop-shadow-xl' />
                        <h3 className='font-semibold text-xl md:text-2xl 2xl:text-3xl
                        capitalize'>{item.title}</h3>
                        <p className='w-full xl:text-xl 2xl:text-2xl text-center '>
                        {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
});

export default About;