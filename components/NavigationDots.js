import React, { useState } from 'react'
import Link from 'next/link';
import { RxDotFilled } from 'react-icons/rx';

const NavigationDots = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index)
    }
    return (
        <div className='flex flex-col w-fit h-fit'>
            {['home', 'about', 'projects', 'technologies', 'contact'].map((item, index) => (
                <Link 
                onClick={handleDotClick}
                href={`#${item}`}>
                    <RxDotFilled 
                    size={25} 
                    className={`duration-200 ease-in-out text-indigo-500
                    ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}/>
                </Link>
            ))}
        </div>
    )
}

export default NavigationDots