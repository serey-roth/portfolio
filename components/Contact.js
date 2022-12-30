import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdError } from 'react-icons/md';

import { client, GITHUB, FACEBOOK, LINKEDIN } from '../lib'
import { toast } from 'react-hot-toast';

const initialFormData = {
    name: '',
    email: '',
    message: '',
}

const Contact = React.forwardRef((props, ref) => {
    const [form, setForm] = useState(initialFormData);

    const [hasError, setHasError] = useState({
        name: false,
        email: false,
        message: false,
    });

    const handleChange = (e) => {
        setForm(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));

        if (e.target.value && hasError[e.target.name]) {
            setHasError(prevData => ({
                ...prevData,
                [e.target.name]: false,
            }));
        } else if (!e.target.value) {
            setHasError(prevData => ({
                ...prevData,
                [e.target.name]: true,
            }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.name && form.email && form.message) {
            const message = { "_type": 'message', ...form }
            const messagePromise = client.create(message);
            toast.promise(messagePromise, {
                loading: 'Sending message...',
                error: (error) => error.message,
                success: 'Message sent! Serey will be in touch with you shortly.'
            }, {
                style: {
                    maxWidth: '400px',
                    fontSize: '20px',
                }
            })
        }
    }

    return (
        <div 
        ref={ref}
        id='contact' 
        className='section mb-10'>
            <h1 className='section-heading'>Let&apos;s Connect!</h1>
            <div className='flex flex-col w-full gap-2 sm:grid grid-cols-2'>
                <div className='flex w-full gap-1 items-center sm:justify-center
                rounded-lg bg-gray-200/30 dark:bg-teal-200
                dark:shadow-inner dark:shadow-black dark:text-black p-2'>
                    <Image 
                    src='/mail.png'
                    alt='email-icon'
                    width={35}
                    height={35}
                    className='sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px]'
                    />
                    <a 
                    className='text-sm sm:text-lg lg:text-xl' 
                    href='mailto:sereyratanakroth@gmail.com'>sereyratanakroth@gmail.com</a>
                </div>
                <div className='flex w-full gap-1 items-center rounded-lg
                sm:justify-center bg-gray-200/30 dark:bg-teal-200
                dark:shadow-inner dark:shadow-black dark:text-black p-2'>
                    <Image 
                    src='/phone.png'
                    alt='phone-icon'
                    width={35}
                    height={35}
                    className='sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px]'
                    />
                    <a 
                    className='text-sm sm:text-lg lg:text-xl' 
                    href='tel:+1(425)2198352'>(+1) (425) 219-8352</a>
                </div>
            </div>
            <form 
            className='flex flex-col w-full gap-2 mt-10 lg:text-xl 2xl:text-2xl'
            onSubmit={handleSubmit}>
                <div className='relative w-full'>
                    <input 
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        required
                        onChange={handleChange}
                        className='w-full rounded-lg appearance-none outline-none
                        focus:ring-inset focus:bg-gray-200/50 duration-200
                        ease-in bg-gray-200/30 dark:bg-teal-200
                        dark:shadow-inner dark:shadow-black dark:text-black px-2 py-3'
                    />
                    {hasError.name && (
                        <MdError className='text-rose-500 w-[20px] h-[20px] absolute
                        top-1 right-1 drop-shadow-md animate-pulse' />
                    )}
                </div>

                <div className='relative w-full'>
                    <input 
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        required
                        onChange={handleChange}
                        className='w-full rounded-lg appearance-none outline-none
                        focus:ring-inset focus:bg-gray-200/50 duration-200
                        ease-in bg-gray-200/30 dark:bg-teal-200
                        dark:shadow-inner dark:shadow-black dark:text-black px-2 py-3'
                    />
                    {hasError.email && (
                        <MdError className='text-rose-500 w-[20px] h-[20px] absolute
                        top-1 right-1 drop-shadow-md animate-pulse' />
                    )}
                </div>

                <div className='relative w-full'>
                    <textarea 
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        cols={20}
                        rows={10}
                        required
                        onChange={handleChange}
                        className='w-full rounded-lg appearance-none outline-none
                        focus:ring-inset focus:bg-gray-200/60 duration-200
                        ease-in bg-gray-200/30 dark:bg-teal-200
                        dark:shadow-inner dark:shadow-black dark:text-black px-2 py-3'
                    />
                    {hasError.message && (
                        <MdError className='text-rose-500 w-[20px] h-[20px] absolute
                        top-1 right-1 drop-shadow-md animate-pulse' />
                    )}
                </div>
                
                <button 
                type='submit'
                className='rounded-lg p-2 bg-gradient-to-tr from-indigo-400
                to-teal-300 text-gray-100 font-semibold mt-5'
                >Send Message</button>
            </form>

            <div className='flex items-center justify-between mt-5'>
                <p className='text-sm md:text-md xl:text-xl'>
                    2022 Serey Roth <br /> All Rights Reserved
                </p>
                <div className='flex items-center gap-2'>
                    <Link href={LINKEDIN}>
                        <AiFillLinkedin 
                        className='text-indigo-500 w-[25px] h-[25px] md:w-[40px] 
                        md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                    </Link>
                    <Link href={GITHUB}>
                        <AiFillGithub 
                        className='text-indigo-500 w-[25px] h-[25px] md:w-[40px] 
                        md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                    </Link>
                    <Link href={FACEBOOK}>
                        <AiFillFacebook 
                        className='text-indigo-500 w-[25px] h-[25px] md:w-[40px] 
                        md:h-[40px] 2xl:w-[50px] 2xl:h-[50px] drop-shadow-xl'/>
                    </Link>
                </div>
            </div>
        </div>
    )
});

export default Contact;