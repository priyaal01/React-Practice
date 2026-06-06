import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Section = (props) => {
  return (
    <div className='bg-white h-screen w-full'>
      <Navbar/>
      <Hero users={props.users}/>
    </div>
  )
}

export default Section