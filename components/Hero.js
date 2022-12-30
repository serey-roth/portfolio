import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    AiFillLinkedin, 
    AiFillGithub, 
    AiFillFacebook, 
} from 'react-icons/ai';
import { motion } from 'framer-motion';

import { FACEBOOK, LINKEDIN, GITHUB, urlFor } from '../lib';


const containerVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2
        }
    }
}

const opacityVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    }
}

const Hero = React.forwardRef(({ 
    hero: { description, photo, tags } 
}, ref) => {
    return (
        <div
        ref={ref}
        id='home'
        className='section mb-10 min-h-screen items-center justify-center'>
            <motion.div 
            variants={containerVariants}
            initial='hidden'
            animate='show'
            className='flex flex-col items-center justify-center gap-5
            lg:grid grid-cols-2 lg:place-content-center w-full'>
                <div className='flex flex-col items-center justify-center lg:justify-start
                gap-5'>
                    <motion.h2 
                    variants={opacityVariants}
                    className='font-bold text-2xl mobile-lg:text-4xl
                    md:text-5xl 2xl:text-8xl text-center lg:text-left w-full'>
                        Hi! I am
                        <span 
                            className='text-4xl md:text-7xl 2xl:text-9xl text-gradient'>
                            <br className='block'/> Serey Roth
                        </span>.
                    </motion.h2>
                    <motion.div
                    variants={opacityVariants}
                    className='flex w-full items-start justify-center 
                    lg:justify-start gap-2 2xl:text-3xl'>
                        {tags.map((title, index) => (
                            <p
                            key={index} 
                            className='w-fit text-center capitalize 
                            rounded-l-full rounded-r-full drop-shadow-2xl
                            bg-teal-500 text-white font-semibold 
                            px-3 py-2 2xl:px-5 2xl:py-4'>
                                {title}
                            </p>
                        ))}
                    </motion.div>
                    <motion.p 
                    variants={opacityVariants}
                    className='w-full md:max-w-[80%] self-center lg:max-w-[400px] 
                    text-center text-lg lg:text-xl lg:text-left 2xl:text-2xl 
                    lg:self-start font-semibold text-indigo-800 drop-shadow-xl
                    dark:text-gray-200'>
                        {description}
                    </motion.p>
                    <motion.div
                    variants={opacityVariants}
                    className='flex w-full items-center justify-center 
                    lg:justify-start gap-5'>
                        <Link href={LINKEDIN}>
                            <AiFillLinkedin 
                            className='text-indigo-500 w-[25px] h-[25px] md:w-[40px] 
                            md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                        </Link>
                        <Link href={GITHUB}>
                            <AiFillGithub 
                            className='text-indigo-500 w-[25px] h-[25px] md:w-[40px] 
                            md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                        </Link>
                        <Link href={FACEBOOK}>
                            <AiFillFacebook 
                            className='text-indigo-500 w-[25px] h-[25px] md:w-[40px] 
                            md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                        </Link>
                    </motion.div>
                </div>

                <motion.div 
                variants={opacityVariants}
                initial='initial'
                className='relative flex items-center justify-center h-[250px]
                rounded-full w-[250px] mobile-lg:w-[300px] mobile-lg:h-[300px]
                md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px]
                xl:w-[540px] xl:h-[540px] 2xl:w-[900px] 2xl:h-[900px] overflow-hidden
                bg-gradient-to-br from-indigo-900 dark:from-indigo-500 shadow-inner
                shadow-black dark:shadow-indigo-600 '>
                    <Image
                    src={urlFor(photo).url()}
                    alt='headshot' 
                    width={400}
                    height={400}
                    className='absolute bottom-0 xl:scale-[130%] xl:bottom-[3rem]
                    2xl:scale-[160%] 2xl:bottom-[9rem]'
                    />
                </motion.div>
            </motion.div>
        </div>
    )
});

export default Hero;