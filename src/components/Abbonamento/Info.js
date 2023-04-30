import React from 'react'

function Info() {
   return (
      <div class="info lg:max-w-[25%]">
         <div class="lg:bg-white lg:p-8 rounded-3xl">
            <ul class="text-sm list-outside">
               <li class="flex gap-2 flex-row items-center lg:items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-green-400/70 shrink-0">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span>Ottieni accesso illimitato a tutti i documenti</span>
               </li>
               <li class="flex gap-2 flex-row items-center lg:items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-green-400/70 shrink-0">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span>Scarica e stampa qualsiasi documento</span>
               </li>
               <li class="flex gap-2 flex-row items-center lg:items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 fill-green-400/70 shrink-0">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  <span>Scopri tutto il materiale di studio di cui hai bisogno!</span>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Info