import React, {useState} from 'react'
import Fatturazione from '../Upgrade/Fatturazione'
import PaypalButton from './PaypalButton'

function Paga() {
   const [value, setValue] = useState(4.99)

   const updateValue = (v) => {
      setValue(v)
   }

   return (
      <div className="paga">
         <div className="bg-white p-5 rounded-3xl">
            <div className="">
               <div className="flex flex-col mb-5">
                  <span className="font-thin text-sm">Step 1 di 2</span>
                  <span className="font-bold">Scegli il piano tariffario</span>
               </div>
               <Fatturazione page="Abbonamento" updateValue={updateValue}/>
            </div>
            <div className="method-picker">
               <div className="flex flex-col">
                  <span className="font-thin text-sm">Step 2 di 2</span>
                  <span className="font-bold">Paga velocemente con Paypal</span>
               </div>
               <div className="paypalButton p-5">
                  <PaypalButton value={value}/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Paga