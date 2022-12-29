import React, { useState } from 'react';
import { motion, wrap, AnimatePresence } from 'framer-motion';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { urlFor } from '../lib';

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 20 : -20,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 1,
            x: direction < 0 ? 20 : -20,
            opacity: 0,
        };
    }
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const arrowBaseClasses = `cursor-pointer bg-black/80 text-white rounded-full 
drop-shadow-2xl absolute top-1/2 -translate-y-1/2 z-[3] p-2 
scale-100 2xl:scale-120`;

const ImageSlider = ({ images }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const handleNextImage = () => {
        paginate(1);
    }

    const handlePreviousImage = () => {
        paginate(-1);
    }

    return (
        <div className='w-full m-auto relative flex flex-col items-center
        justify-center px-4 py-2 mb-3'>
            <div className='w-full my-2 h-[150px] mobile-lg:h-[160px] md:h-[190px] 2xl:h-[250px] relative'>
                <AnimatePresence custom={direction}>
                    <motion.img
                        className='max-w-full absolute w-full h-full rounded-lg drop-shadow-xl'
                        key={page}
                        src={urlFor(images[imageIndex]).url()}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 250, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>
            </div>

            <BsChevronCompactLeft
                size={30}
                onClick={handlePreviousImage}
                className={`${arrowBaseClasses} left-2`}
            />

            <BsChevronCompactRight
                size={30}
                onClick={handleNextImage}
                className={`${arrowBaseClasses} right-2`}
            />

        </div>
    )
};

export default ImageSlider;