import React from 'react'
import Link from 'next/link';
import { RxDotFilled } from 'react-icons/rx';

const NavigationDots = ({ currentSectionIndex, onClick}) => {
    return (
        <div className='flex flex-col w-fit h-fit'>
            {['home', 'about', 'projects', 'technologies', 'contact'].map((item, index) => (
                <Link 
                key={`${item}-dot`}
                onClick={() => onClick(index)}
                href={`#${item}`}>
                    <RxDotFilled 
                    size={25} 
                    className={`duration-200 ease-in-out text-indigo-500
                    ${index === currentSectionIndex ? 'opacity-100' : 'opacity-50'}`}/>
                </Link>
            ))}
        </div>
    )
}

export default NavigationDots