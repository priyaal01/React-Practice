import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-8 py-5 '>
                <h4 className='bg-black text-white px-4 py-2 uppercase rounded-3xl tracking-wider'>Target Audience</h4>
                <button className='cursor-pointer bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-3xl uppercase tracking-widest text-sm'>Digital Banking Platform</button>
            </div>
        </div>
    )
}

export default Navbar