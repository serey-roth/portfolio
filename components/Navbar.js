import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { SECTIONS } from '../lib';
import DarkModeToggler from './DarkModeToggler';

const variants = {
    initial: { x: '100%', opacity: 0 },
    animate: (index) => ({
        opacity: 1,
        x: ['100%', '0%'],
        transition: {
            delay: index * 0.2,
            x: {
                duration: 0.85,
                ease: 'easeOut',
            }
        }
    }),
    exit: (index) => ({
        x: ['0%', '100%'],
        transition: {
            delay: 0.05 * index,
            x: {
                duration: 0.85,
                ease: 'easeIn',
            }
        }
    })
};

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <nav className='w-full flex gap-2 justify-evenly items-center p-5
        bg-white/25 backdrop-blur-sm border border-white/20 fixed z-10
        dark:bg-indigo-900/25'>
            <h1 className='flex-1 text-4xl xl:text-5xl font-bold text-gradient
            uppercase'>Serey</h1>

            <ul className='h-full items-center justify-center gap-3
            hidden lg:flex'>
                {SECTIONS.map(item => (
                    <li key={`link-${item}`} className='opacity-80 group
                    group-hover:opacity-100
                    ease-in-out duration-200'>
                        <Link
                            href={`#${item}`}
                            className='uppercase p-3 xl:px-5 rounded-l-full
                            rounded-r-full font-semibold text-teal-600
                            duration-500 ease-in-out group-hover:bg-gradient-to-r
                            from-indigo-500 to-teal-500 group-hover:text-white 
                            lg:text-xl 2xl:text-2xl dark:text-teal-400'>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            <DarkModeToggler />

            <div className='flex flex-col lg:hidden'>
                <div
                    className='cursor-pointer w-fit p-2 text-white rounded-full
                    bg-teal-500 dark:bg-teal-400'
                    onClick={handleToggle}>
                    <HiMenuAlt4 className='w-[20px] h-[20px] md:w-[26px] md:h-[26px]' />
                </div>
                <AnimatePresence>
                {toggle && (
                    <div>
                        <motion.div
                            key='side-nav-bar'
                            variants={variants}
                            custom={0.5}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='fixed top-0 bottom-0 right-0 z-20
                            w-[80%] mobile-md:w-[60%] h-screen flex flex-col 
                            justify-end pl-4 items-end drop-shadow-xl
                            bg-gradient-to-b from-indigo-200 to-teal-400
                            shadow-lg shadow-indigo-500 dark:from-indigo-700
                            dark:to-indigo-200 '
                        >
                            <div
                                className='cursor-pointer p-5 rounded-full text-teal-800
                                dark:text-teal-200'
                                onClick={handleToggle}>
                                <HiX size={30} />
                            </div>
                            <motion.ul 
                            key='link-list'
                            variants={variants}
                            custom={0.8}
                            className='w-full h-full flex flex-col items-start 
                            justify-start gap-4'>
                            {SECTIONS.map((item, index) => (
                                <motion.li 
                                key={item}
                                custom={0.95 + index}
                                variants={variants}>
                                    <Link
                                        className='uppercase text-gray-100 duration-200
                                        ease-in-out hover:text-gradient hover:underline
                                        underline-offset-8 font-bold text-2xl md:text-3xl'
                                        href={`#${item}`}
                                        onClick={handleToggle}>
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                            </motion.ul>
                        </motion.div>
                        <motion.div
                            key='side-nav-bar-overlay'
                            variants={variants}
                            custom={0}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='fixed top-0 bottom-0 right-0 z-10
                            w-full h-screen bg-black/80'
                        />
                    </div>
                )}
                </AnimatePresence>
            </div>
        </nav>
    )
};

export default Navbar;