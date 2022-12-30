import React, { useState } from 'react'
import { motion } from 'framer-motion';

const darkModeClasses = `justify-end bg-gradient-to-l from-amber-700 
to-amber-100`;

const lightModeClasses = `justify-start bg-gradient-to-r from-indigo-700 
to-indigo-200`;

const DarkModeToggler = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
        if (isDarkMode) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
    }

    return (
        <div
        className={`flex w-[80px] mobile-lg:w-[100px] xl:w-[120px] 
        rounded-l-full rounded-r-full cursor-pointer px-2 py-1
        ${isDarkMode ? darkModeClasses : lightModeClasses} 
        shadow-inner shadow-black lg:py-2`}
        onClick={handleDarkModeToggle}>
            <motion.div
            layout
            transition={{
                type: "spring",
                stiffness: 700,
                damping: 30
            }}>
                <motion.img
                src={isDarkMode ? '/sun.png' : '/moon.png'}
                alt='dark-mode-icon'
                className={`max-w-[35px] ${!isDarkMode && 'scale-90'}`} />
            </motion.div>
        </div>
    )
}

export default DarkModeToggler