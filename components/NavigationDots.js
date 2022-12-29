import React from 'react';
import Link from 'next/link';
import { RxDotFilled } from 'react-icons/rx';
import { SECTIONS } from '../lib';

const NavigationDots = ({ currentSectionIndex, onClick}) => {
    return (
        <div className='flex flex-col w-fit h-fit'>
            {SECTIONS.map((item, index) => (
                <Link 
                key={`${item}-dot`}
                onClick={() => onClick(index)}
                href={`#${item}`}>
                    <RxDotFilled 
                    size={25} 
                    className={`duration-200 ease-in-out text-indigo-500 scale-100
                    ${index === currentSectionIndex ? 'opacity-100 scale-150' : 'opacity-30'}`}/>
                </Link>
            ))}
        </div>
    )
};

export default NavigationDots;