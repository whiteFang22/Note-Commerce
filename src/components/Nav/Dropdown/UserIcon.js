import React from 'react'

function UserIcon(props) {
   return (
      <button onClick={props.onClick} className={`bg-pink-700 text-${props.text} text-white rounded-full w-${props.w} h-${props.h} z-20 relative`}>
         <span>M</span>
      </button>
   )
}

export default UserIcon