import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const data = ["https://images.unsplash.com/photo-1786628211715-8a4ae8777c9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8", "https://images.unsplash.com/photo-1786604455312-dcced2fda0a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1786604455363-5001cd5575b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1786604455350-9abb1ea7328c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"]

const Carousel = () => {
    const [imgIndex, setImgIndex] = useState(0)
    const handlePreviousClick = () => {
        setImgIndex((imgIndex) => imgIndex === 0 ? data.length - 1 : imgIndex - 1)
    }

    const handleNextClick = () => {
        setImgIndex((imgIndex) => imgIndex === data.length - 1 ? 0 : imgIndex + 1)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setImgIndex((imgIndex) => (imgIndex + 1) % data.length)
        }, 1000)
        return ()=>{clearInterval(timer)}
    }, [imgIndex])
    return (
        <div className='flex justify-center mt-10'>
            <button className='font-bold p-5 m-2' onClick={handlePreviousClick}>Previous</button>
            <img src={data[imgIndex]} className='w-125 h-100 object-cover' alt='carousel' />
            <button className='font-bold p-5 m-2' onClick={handleNextClick}>Next</button>
        </div>
    )
}
export default Carousel