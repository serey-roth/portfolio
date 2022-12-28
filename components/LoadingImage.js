import React, { useState, useEffect } from 'react'

const LoadingImage = ({ height, width, src, alt, classes }) => {
    const [status, setStatus] = useState('pending');
    const [image, setImage] = useState();

    useEffect(() => {
        const image = new Image();
        image.onload = () => setStatus('success')
        image.onerror = () => setStatus('failure')
        image.src = src;
        image.alt = alt;
        setImage(image);
        setStatus('pending');
    }, [src]);

    const styles = {
        backgroundImage: status === 'success' &&
            `url(${image.src})`
    };

    if (width) styles['width'] = width;
    if (height) styles['height'] = height;

    return (
        <div
            className={`rounded-2xl bg-center bg-contain bg-no-repeat duration-500
                ${status !== 'success' && 'bg-gray-400 animate-pulse'} ${classes}`}
            style={styles}
        />
    )
}

export default LoadingImage