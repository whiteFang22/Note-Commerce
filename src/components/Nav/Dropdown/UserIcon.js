import React from 'react'

function UserIcon(props) {
   const Style = `bg-pink-700 text-${props.text} text-white rounded-full w-${props.w} h-${props.h} z-20 relative`;
   return (
      <button onClick={props.onClick} className={Style}>
         <span>M</span>
      </button>
   )
}

export default UserIcon