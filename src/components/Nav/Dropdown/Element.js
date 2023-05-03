import React from 'react'
import { Link } from 'react-router-dom'


function Element(props) {
  const l = props.d.length;

  return (
    <Link to={props.to} onClick={props.onClick} className={`flex gap-3 justify-between hover:bg-[#e2effd] hover:text-[#3092fa] p-3 ${props.class}`}>
      <span>{props.name}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={props.viewBox} stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        {l === 1 ?
          <path className={props.pathClass} stroke-linecap="round" stroke-linejoin="round" d={props.d[0]} />
          :
          <>
          <path className={props.pathClass} stroke-linecap="round" stroke-linejoin="round" d={props.d[0]} />
          <path className={props.pathClass} stroke-linecap="round" stroke-linejoin="round" d={props.d[1]} />
          </>
        }

      </svg>
    </Link>
  )
}

export default Element