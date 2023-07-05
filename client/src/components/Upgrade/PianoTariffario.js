import React from 'react'
import Fatturazione from './Fatturazione'
import ButtonAbb from '../Upgrade/ButtonAbb'

function PianoTariffario() {
   return (
      <section className="tariffa flex flex-col bg-[#f6f7fb] items-center py-10 gap-y-3">
         <div className="flex justify-center items-center gap-3">
            <span className="font-bold text-xl tracking-wide">Scegli il piano tariffario</span>
            <span className="bg-lime-300 rounded-lg px-2 font-bold flex self-center text-xl">Premium @</span>
         </div>
         <Fatturazione />
         <ButtonAbb />
      </section>
   )
}

export default PianoTariffario