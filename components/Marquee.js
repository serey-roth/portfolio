import React from "react";
import { motion } from "framer-motion";

const marqueeVariants = {
    animate: {
        x: ["0%", "-100%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 150,
                ease: "linear"
            },
        },
    },
};

const Marquee = ({ children }) => {
    return (
        <>
            <div className="relative w-full max-w-full h-[200px] overflow-x-hidden
            backdrop-blur-xl bg-inherit">
                <motion.div
                    className="absolute whitespace-nowrap"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {children}
                </motion.div>
            </div>
        </>
    );
};

export default Marquee;