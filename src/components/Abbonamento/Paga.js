import React from 'react'
import Fatturazione from '../Upgrade/Fatturazione'

function Paga() {
   return (
      <div className="paga">
         <div className="bg-white p-5 rounded-3xl">
            <div className="">
               <div className="flex flex-col mb-5">
                  <span className="font-thin text-sm">Step 1 di 2</span>
                  <span className="font-bold">Scegli il piano tariffario</span>
               </div>
               <Fatturazione />
            </div>
            <div className="method-picker">
               <div className="flex flex-col">
                  <span className="font-thin text-sm">Step 2 di 2</span>
                  <span className="font-bold">Scegli il tuo metodo di pagamento</span>
               </div>
               <div className="flex">
                  <button className="rounded-full w-full bg-sky-700 text-white font-semibold text-xl py-2">PayPal</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Paga