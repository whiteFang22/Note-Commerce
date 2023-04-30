import React from 'react'
import Fatturazione from '../Upgrade/Fatturazione'

function Paga() {
   return (
      <div class="paga">
         <div class="bg-white p-5 rounded-3xl">
            <div class="">
               <div class="flex flex-col mb-5">
                  <span class="font-thin text-sm">Step 1 di 2</span>
                  <span class="font-bold">Scegli il piano tariffario</span>
               </div>
               <Fatturazione />
            </div>
            <div class="method-picker">
               <div class="flex flex-col">
                  <span class="font-thin text-sm">Step 2 di 2</span>
                  <span class="font-bold">Scegli il tuo metodo di pagamento</span>
               </div>
               <div class="flex">
                  <button class="rounded-full w-full bg-sky-700 text-white font-semibold text-xl py-2">PayPal</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Paga