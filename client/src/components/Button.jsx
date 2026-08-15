// Make Reusable Button Component in React

import React from 'react'

const Button = ({children,bgcolor="bg-black",textcolor="text-white",onClick}) => {
  return (

    <div>
        <button className={`py-2 px-3 rounded-lg m-2 cursor-pointer hover:bg-gray-400 ${bgcolor} ${textcolor}`} onClick={onClick}>
            {children}
        </button>
    </div>
  )
}

export default Button