import React from 'react'

function Fatturazione() {
   return (
      <div class="cshoose flex gap-3 mb-5">
         <button class="flex flex-row border focus:ring-2 focus:ring-[#3092fa] hover:bg-slate-100 focus:bg-slate-100 rounded-3xl p-5">
            <div class="flex flex-col text-left">
               <p>Fatturazione <b>annuale</b></p>
               <div>
                  <div class="flex items-center gap-2">
                     <span><b>2,99 €</b> / mese</span>
                     <span class="bg-[#2cc302] rounded-full text-white px-2">Risparmia il 40%</span>
                  </div>
                  <div>
                     <span class="text-xs text-[#4e657e]">Importo fatturato 35,88€ una volta ogni anno dopo 30 giorni</span>
                  </div>
               </div>
            </div>
         </button>
         <button class="flex flex-row border focus:ring-2 focus:ring-[#3092fa] hover:bg-slate-100 focus:bg-slate-100 rounded-3xl p-5">
            <div class="flex flex-col text-left">
               <p>Fatturazione <b>trimestrale</b></p>
               <div>
                  <div class="flex items-center gap-2">
                     <span><b>4,99 €</b> / mese</span>
                     {/* <!-- <span class="bg-[#2cc302] rounded-full text-white px-2">Risparmia il 40%</span> --> */}
                  </div>
                  <div>
                     <span class="text-xs text-[#4e657e]">Importo fatturato 14,97€ una volta ogni trimestre dopo 30 giorni</span>
                  </div>
               </div>
            </div>
         </button>
      </div>
   )
}

export default Fatturazione
