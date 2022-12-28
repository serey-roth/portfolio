import React from 'react'
import { motion } from 'framer-motion'
import Marquee from './Marquee'
import LoadingImage from './LoadingImage'

import { urlFor } from '../lib/client'

const Technologies = React.forwardRef(({ technologies }, ref) => {
    return (
        <div 
        ref={ref}
        id='technologies'
        className='w-screen flex flex-col items-center pt-20'>
            <h1 className='w-full font-bold text-3xl lg:text-5xl py-2 mb-5 px-10 xl:w-[80%]'>Technologies</h1>
            <Marquee>
                <div className='w-full flex gap-5 items-center py-5'>
                    {technologies.map(technology => (
                        <LoadingImage 
                                key={technology.name}
                                src={urlFor(technology.icon).url()}
                                alt={technology.name}
                                width={'150px'}
                                height={'150px'}
                                classes='drop-shadow-xl'
                            />
                    ))}
                </div>
            </Marquee>
        </div>
    )
})

export default Technologies