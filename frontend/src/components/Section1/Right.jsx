import React from 'react'
import RightCard from './RightCard'

const Right = (props) => {
  return (
    <div className='h-full flex p-6 gap-7 w-2/3'>
        {props.users.map((elem,index)=>{
          return <RightCard key={index} id={index} img={elem.img} intro={elem.intro} tag={elem.tag} />
        })}

    </div>
  )
}

export default Right