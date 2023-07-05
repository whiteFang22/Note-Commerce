import React from 'react'

function Info() {
   return (
      <div className="info lg:max-w-[25%]">
         <div className="lg:bg-white lg:p-8 rounded-3xl">
            <ul className="text-sm list-outside">
               <li className="flex gap-2 flex-row items-center lg:items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-green-400/70 shrink-0">
                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Ottieni accesso illimitato a tutti i documenti</span>
               </li>
               <li className="flex gap-2 flex-row items-center lg:items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-green-400/70 shrink-0">
                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Scarica e stampa qualsiasi documento</span>
               </li>
               <li className="flex gap-2 flex-row items-center lg:items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-green-400/70 shrink-0">
                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Scopri tutto il materiale di studio di cui hai bisogno!</span>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Info