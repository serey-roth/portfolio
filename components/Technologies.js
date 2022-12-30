import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { urlFor } from '../lib';

const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    }
};

const renderTechIcons = (techs) => (
    <div className='w-full grid grid-cols-3 gap-4 
    place-items-center place-content-center'>
        {techs.map((tech, index) => (
            <div 
            key={tech.name}
            className='w-full relative group'>
                <motion.img
                    variants={imageVariants}
                    initial='hidden'
                    whileInView='show'
                    src={urlFor(tech.icon).url()}
                    alt={tech.name}
                    className='max-w-full drop-shadow-xl'
                />
                <div className='absolute inset-0 backdrop-blur-xl
                flex bg-white/50 font-semibold
                shadow-[0px_0px_40px_5px_rgba(255,255,255,0.5)]
                px-2 items-center justify-center
                break-all opacity-0 group-hover:opacity-100
                duration-100 ease-in-out dark:text-indigo-800
                lg:text-lg rounded-lg'>
                    {tech.name}
                </div>
            </div>
        ))}
    </div>
);

const Technologies = React.forwardRef(({ technologies }, ref) => {
    return (
        <div
            ref={ref}
            id='technologies'
            className='section'>
            <h1 className='section-heading'>Toolbox</h1>
            <div className='w-full flex flex-col md:flex-row md:flex-wrap gap-5
            items-center md:items-stretch justify-evenly dark:bg-gradient-to-b 
            dark:from-indigo-700 dark:to-indigo-200 dark:px-5 py-16
            dark:rounded-3xl dark:shadow-[inset_0px_0px_10px_10px_#000]
            dark:gap-2'>
                {Object.entries(technologies).map(([key, values]) => (
                    <div
                        key={key}
                        className='relative w-full md:w-[300px] lg:w-[400px] xl:w-[450px] 
                        2xl:w-[500px] flex flex-col items-center 
                        gap-5 p-4'>
                        <h3 className='font-semibold text-xl md:text-2xl'>
                            {key}
                        </h3>
                        {renderTechIcons(values)}
                    </div>
                ))}
            </div>
        </div>
    )
});

export default Technologies;