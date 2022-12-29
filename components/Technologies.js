import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../lib';

const imageContainer = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 1000,
            staggerChildren: 5000,
            ease: "easeInOut"
        }
    }
}

const imageVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    }
}

const renderTechIcons = (techs) => (
    <motion.div
        variants={imageContainer}
        initial='hidden'
        whileInView='show'
        className='w-full grid grid-cols-3 gap-4 
        place-items-center place-content-center'>
        {techs.map(tech => (
            <motion.img
                variants={imageVariants}
                initial='hidden'
                whileInView='show'
                whileHover='hover'
                key={tech.name}
                src={urlFor(tech.icon).url()}
                alt={tech.name}
                className='max-w-full drop-shadow-xl'
            />
        ))}
    </motion.div>
)

const Technologies = React.forwardRef(({ technologies }, ref) => {
    return (
        <div 
        ref={ref}
        id='technologies'
        className='section'>
            <h1 className='font-bold text-3xl lg:text-5xl py-2 mb-2'>
                Technologies
            </h1>
            <div 
            className='w-full flex flex-col py-10 md:flex-row md:flex-wrap gap-5
            items-center md:items-start justify-center'>
                {Object.entries(technologies).map(([key, values]) => (
                    <div 
                    key={key}
                    className='w-full md:w-[300px] flex flex-col items-center gap-5 p-4'>
                        <h3 className='font-semibold text-xl md:text-2xl'>
                            {key}
                        </h3>
                        {renderTechIcons(values)}
                    </div>
                ))}
            </div>
        </div>
    )
})

export default Technologies