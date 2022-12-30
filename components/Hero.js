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
    hero: { description, photo, tags, resumeURL }
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
            lg:grid grid-cols-2 lg:place-content-center w-full relative px-1'>
                <div className='flex flex-col items-center justify-center lg:justify-start
                gap-5'>
                    <motion.h2
                    variants={opacityVariants}
                    className='font-bold text-2xl mobile-lg:text-4xl
                    md:text-5xl 2xl:text-8xl text-center lg:text-left w-full'>
                        Hi! I am
                        <span
                        className='text-4xl mobile-lg:text-5xl lg:text-7xl 2xl:text-9xl text-gradient'>
                            <br className='block' /> Serey Roth
                        </span>.
                    </motion.h2>
                    <motion.div
                    variants={opacityVariants}
                    className='flex flex-wrap w-full items-start justify-center 
                    lg:justify-start gap-2 2xl:text-3xl'>
                        {tags.map((title, index) => (
                            <p
                            key={index}
                            className='w-fit text-center capitalize 
                            rounded-l-full rounded-r-full drop-shadow-2xl
                            bg-teal-500 text-white font-semibold text-sm
                            p-2 2xl:px-5 2xl:py-4 shadow-inner shadow-black
                            mobile-lg:text-lg md:text-xl mobile-lg:px-3'>
                                {title}
                            </p>
                        ))}
                    </motion.div>
                    <motion.p
                    variants={opacityVariants}
                    className='w-full sm:max-w-[70%] self-center lg:max-w-[400px] 
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
                            className='text-indigo-500 w-[30px] h-[30px] md:w-[40px] 
                            md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                        </Link>
                        <Link href={GITHUB}>
                            <AiFillGithub
                            className='text-indigo-500 w-[30px] h-[30px] md:w-[40px] 
                            md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                        </Link>
                        <Link href={FACEBOOK}>
                            <AiFillFacebook
                            className='text-indigo-500 w-[30px] h-[30px] md:w-[40px] 
                            md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                        </Link>
                        <motion.div
                        animate={{
                            // bg-[indigo, amber, teal]-500
                            backgroundColor: [
                                'rgb(99 102 241)',
                                'rgb(245 158 11)', 
                                'rgb(20 184 166)']
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className='w-[100px] lg:w-[150px] 2xl:w-[190px] p-3 2xl:py-5 
                        font-bold rounded-l-full rounded-r-full shadow-inner
                        shadow-black text-white text-center text-xl xl:text-2xl'>
                            <Link href={`${resumeURL}?dl=serey_roth_resume`}>
                                Resume
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                variants={opacityVariants}
                initial='initial'
                className='relative flex items-center justify-center h-[250px]
                rounded-full w-[250px] mobile-lg:w-[300px] mobile-lg:h-[300px]
                md:w-[330px] md:h-[330px] lg:w-[450px] lg:h-[450px]
                xl:w-[480px] xl:h-[480px] 2xl:w-[800px] 2xl:h-[800px] overflow-hidden
                bg-gradient-to-br from-indigo-900 dark:from-indigo-500 shadow-inner
                shadow-black dark:shadow-indigo-600 '>
                    <Image
                    src={urlFor(photo).url()}
                    alt='headshot'
                    width={400}
                    height={400}
                    className='absolute bottom-0 xl:scale-[110%] xl:bottom-2
                    2xl:scale-[180%] 2xl:bottom-[9rem]'
                    />
                </motion.div>

            </motion.div>
        </div>
    )
});

export default Hero;