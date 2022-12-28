import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { urlFor } from '../lib/client'
import LoadingImage from './LoadingImage'

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }

    const handlePreviousImage = () => {
        setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    }

    const handleGoToImage = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div className='group w-full m-auto relative flex flex-col items-center
        justify-center px-4 py-2 mb-3'>
            <LoadingImage
                src={urlFor(images[currentIndex]).url()}
                alt="project-screenshot"
                width={'100%'}
                height={'250px'} />

            <div
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2
            group-hover:bg-black/20 text-white ease-in duration-200 cursor-pointer'
            onClick={handlePreviousImage}>
                <BsChevronCompactLeft 
                size={30}
                 />
            </div>

            <div 
            className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2
            group-hover:bg-black/20 text-white ease-in duration-200 cursor-pointer'
            onClick={handleNextImage}>
                <BsChevronCompactRight size={30} />
            </div>

            <div className='flex absolute -bottom-4 justify-center'>
                {Array.from(Array(images.length).keys()).map(imageIndex => (
                    <RxDotFilled 
                    key={imageIndex}
                    size={20} 
                    className={`cursor-pointer ${currentIndex === imageIndex ? 'opacity-100' : 'opacity-30'}`}
                    onClick={() => handleGoToImage(imageIndex)} />
                ))}
            </div>
        </div>
    )
}

export default ImageSlider