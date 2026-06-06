import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = (props) => {
  return (
    <div className='px-10 flex gap-10 items-center h-[90vh] py-18 text-white'>
        <Left/>
        <Right users={props.users}/>
    </div>
  )
}

export default Hero