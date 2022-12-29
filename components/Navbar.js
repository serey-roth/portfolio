import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    initial: { x: 300, opacity: 0 },
    animate: {
        opacity: 1,
        x: [300, 0],
        transition: {
            x: {
                duration: 0.85,
                ease: 'easeOut',
            }
        }
    },
    exit: {
        x: 300,
        transition: {
            x: {
                duration: 0.85,
                ease: 'easeOut',
            }
        }
    }
};

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <nav className='w-full flex justify-evenly items-center p-5
        bg-white/25 backdrop-blur-sm border border-white/20 fixed z-10'>
            <h1 className='flex-1 text-4xl font-bold bg-gradient-to-tr
            from-indigo-500 to-teal-200 bg-clip-text text-transparent
            uppercase'>Serey</h1>
            <ul className='h-full items-center justify-center gap-3
            hidden lg:flex'>
                {['home', 'about', 'projects', 'technologies', 'contact'].map(item => (
                    <li key={`link-${item}`} className='opacity-80 group
                    group-hover:opacity-100
                    ease-in-out duration-200'>
                        <Link
                            href={`#${item}`}
                            className='uppercase px-5 py-3 rounded-l-full
                            rounded-r-full font-semibold text-teal-500/80 duration-500
                            ease-in-out group-hover:bg-gradient-to-r
                            from-indigo-500/50 to-teal-500/50 group-hover:text-white'>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='flex flex-col lg:hidden'>
                <div
                    className='cursor-pointer w-fit p-2 text-white rounded-full
                    bg-teal-500'
                    onClick={handleToggle}>
                    <HiMenuAlt4 size={15} />
                </div>
                <AnimatePresence>
                {toggle && (
                    <motion.div
                        key='side-nav-bar'
                        variants={variants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        className='fixed top-0 bottom-0 right-0 z-20
                        w-[80%] h-screen flex flex-col justify-end pl-4
                        items-end drop-shadow-xl bg-indigo-100'
                    >
                        <div
                            className='cursor-pointer p-5 rounded-full'
                            onClick={handleToggle}>
                            <HiX size={30} />
                        </div>
                        <ul className='w-full h-full flex flex-col items-start justify-start
                        gap-4'>
                        {['home', 'about', 'projects', 'technologies', 'contact'].map(item => (
                            <li key={item}>
                                <Link
                                    className='uppercase text-teal-500/80 duration-200
                                    ease-in-out hover:text-indigo-500 hover:underline
                                    underline-offset-8 font-semibold'
                                    href={`#${item}`}
                                    onClick={handleToggle}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </nav>
    )
};

export default Navbar;