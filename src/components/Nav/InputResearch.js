import React from 'react'

function InputResearch() {
   return (
      <div class="form w-full bg-white p-2 w-4xl rounded-full border-2 border-transparent hover:border-blue-400">
         <form action="" class="flex">
            <input type="text" class="outline-transparent ml-3 text-black w-full" placeholder="Cerca insegnamenti, libri o appunti"/>
               <button type="submit" class="mr-3 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 stroke-black fill-black">
                     <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
               </button>
         </form>
      </div>
   )
}

export default InputResearch