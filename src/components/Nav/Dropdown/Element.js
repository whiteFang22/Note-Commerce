import React from 'react'
import { Link } from 'react-router-dom'


function Element(props) {
  const l = props.d.length;

  return (
    <Link to={props.to} onClick={props.onClick} className={`flex gap-3 justify-between hover:bg-[#e2effd] hover:text-[#3092fa] p-3 ${props.Style}`}>
      <span>{props.name}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={props.viewBox} strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        {l === 1 ?
          <path className={props.pathClass} strokeLinecap="round" strokeLinejoin="round" d={props.d[0]} />
          :
          <>
          <path className={props.pathClass} strokeLinecap="round" strokeLinejoin="round" d={props.d[0]} />
          <path className={props.pathClass} strokeLinecap="round" strokeLinejoin="round" d={props.d[1]} />
          </>
        }

      </svg>
    </Link>
  )
}

export default Element