import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = (props) => {
    return (
        <div className='h-full relative w-65 ml-3 overflow-hidden rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="Description" />
            <div className='absolute top-0 left-0 h-full w-full  flex flex-col justify-between '>
                <div className=' h-full w-full px-8 py-5'>
                    <h2 className='text-4xl font-bold text-black rounded-full bg-white h-12 w-12 flex items-center justify-center'>{props.id+1}</h2>
                </div>
                <div className=' px-5 py-5'>
                    <p className='text-lg  leading-relaxed text-gray-300'>{props.intro}</p>
                </div>
                <div className='px-5 py-5 flex items-center justify-between'>
                    <button className='bg-yellow-300 text-black justify-end rounded-full hover:bg-amber-700 px-5 py-2'>{props.tag}</button>
                    <button className='rounded-full  text-black bg-yellow-300'><ArrowRight size={40} strokeWidth={1.25} /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCard;