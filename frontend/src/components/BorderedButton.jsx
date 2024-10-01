import React from 'react'

export const BorderedButton = (props) => {
  return (
    <button className={`text-lg font-medium text-[#515A6B] border border-[#eaeaea] rounded-lg px-5 py-3${props.isActive ? ' bg-[#D6E1EF]' : ' '}`} >{props.name}</button>
    
  )
}
