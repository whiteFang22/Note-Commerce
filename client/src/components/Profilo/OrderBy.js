import React, { useState } from 'react'

function OrderBy(props) {
   const [arrowDown, setArrow] = useState(true);
   const change = () => {
      setArrow(!arrowDown)
      // console.log(arrowDown);
   }

   return (
      <button className='p-2 mr-1 align-center border-b-4 border-transparent focus:text-[#3092fa] focus:border-[#3092fa] hover:text-[#3092fa] hover:border-[#3092fa]' onClick={change}>
         <span>{props.name}</span>
         {arrowDown ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline">
               <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline">
               <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
            </svg>
         }

      </button>
   )
}

export default OrderBy