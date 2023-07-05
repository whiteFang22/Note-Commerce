import React, {useState, useContext} from 'react'
import UserIcon from '../Nav/Dropdown/UserIcon'
import { StateContext } from '../States';

function Head() {
  const [state] = useContext(StateContext);
  const {user, university } = state
  console.log(user, university)

   return (
      <div className="bg-[#f6f7fb] flex flex-row items-center p-10 pt-5">
         <div className="flex">
            <div>
               <UserIcon text="xl" w="20" h="20"/>
               {/* <button className="bg-pink-700 text-xl text-white rounded-full w-20 h-20 z-20 relative">
                  <span>M</span>
               </button> */}
            </div>
            <div className='flex flex-col ml-7 gap-y-3'>
               <span className="text-2xl font-semibold">{user}</span>
               <p className='flex gap-2 hover:text-[#3092fa]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                     <path fillRule="evenodd" d="M9.674 2.075a.75.75 0 01.652 0l7.25 3.5A.75.75 0 0117 6.957V16.5h.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H3V6.957a.75.75 0 01-.576-1.382l7.25-3.5zM11 6a1 1 0 11-2 0 1 1 0 012 0zM7.5 9.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm3.25 0a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm3.25 0a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className='hover:underline'>{university}</span>
               </p>
            </div>
         </div>
      </div>
   )
}

export default Head