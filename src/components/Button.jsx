import React from 'react'
import { Link } from 'react-router-dom'

function Button({link , text, active}) {
  return (
    <div>
        <Link to={link}>
        <div className={`border-[1px] px-4 py-[0.4rem] rounded-[4px] 
        ${active ? "*: border-Purple text-Purple" : "bg-Purple text-white"}
         `}>
                {text}
        </div>
        </Link>
    </div>
  )
}

export default Button