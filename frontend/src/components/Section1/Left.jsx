import React from 'react'
import { MoveUpRight } from 'lucide-react'

const Left = () => {
  return (
    <div className='h-full w-1/3'>
        <h2 className='text-6xl font-bold mb-8 tracking-wide px-5 text-black'>
            Prospective Customer Segmentaion
        </h2>
        <p className='text-lg tracking-wide px-5 text-black'>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
        </p>
        <div className='text-black px-3 mt-30'>
            <MoveUpRight size={50} strokeWidth={3} />
        </div>

    </div>
  )
}

export default Left