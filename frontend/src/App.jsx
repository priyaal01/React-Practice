import React from 'react'
import Section from './components/Section1/Section'
import Navbar from './components/Section1/Navbar'


const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1482424917728-d82d29662023?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbiUyMGRhcmslMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum reiciendis earum Accusantium, itaque porro',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1667680760644-56384efdc74e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwZGFyayUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum reiciendis earum Accusantium, itaque porro',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1515488825947-f1c0842d7953?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum reiciendis earum Accusantium, itaque porro',
      tag:'Underbanked'
    },
  ]
  return (
    <div>
      <Section users={users}/>11
    </div>
  )
}

export default App