import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import { client } from '../lib/client'
import { toast } from 'react-hot-toast';

const initialFormData = {
    name: '',
    email: '',
    message: '',
}

const Footer = React.forwardRef((props, ref) => {
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
                success: 'Message sent! Serey will be in touch with you soon.'
            }, {
                style: {
                    maxWidth: '300px',
                }
            })
        }
    }

    return (
        <div 
        ref={ref}
        id='contact' 
        className='relative w-full pt-20 pb-10 px-10 xl:w-[80%]'>
            <h1 className='font-bold text-3xl lg:text-5xl py-2 mb-2'>Contact</h1>
            <div className='flex flex-col w-full gap-2 sm:grid grid-cols-2'>
                <div className='flex w-full gap-1 items-center sm:justify-center
                rounded-lg bg-gray-200/30 p-2'>
                    <Image 
                    src='/mail.png'
                    alt='email-icon'
                    width={35}
                    height={35}
                    className='sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px]'
                    />
                    <a className='text-sm sm:text-lg' href='mailto:sereyratanakroth@gmail.com'>sereyratanakroth@gmail.com</a>
                </div>
                <div className='flex w-full gap-1 items-center rounded-lg
                sm:justify-center bg-gray-200/30 p-2'>
                    <Image 
                    src='/phone.png'
                    alt='phone-icon'
                    width={35}
                    height={35}
                    className='sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px]'
                    />
                    <a className='text-sm sm:text-lg' href='tel:+1(425)2198352'>(+1) (425)219-8352</a>
                </div>
            </div>
            <form 
            className='flex flex-col w-full gap-2 mt-10'
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
                        ease-in bg-gray-200/30 px-2 py-3'
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
                        ease-in bg-gray-200/30 px-2 py-3'
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
                        ease-in bg-gray-200/30 px-2 py-3'
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
                <p className='text-sm'>2022 Serey Roth <br /> All Rights Reserved</p>
                <div className='flex items-center gap-1'>
                    <AiFillLinkedin className='text-indigo-500 w-[30px] h-[30px]'/>
                    <AiFillGithub className='text-indigo-500 w-[30px] h-[30px]'/>
                    <AiFillFacebook className='text-indigo-500 w-[30px] h-[30px]'/>
                </div>
            </div>
        </div>
    )
});

export default Footer