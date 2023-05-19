import React from 'react'
import AnteprimaPdf from '../Search/AnteprimaPdf'
import InputResearch from '../Nav/InputResearch'
import OrderBy from './OrderBy'
import SaveButton from './SaveButton'

function Content(props) {
   return (
      <div className='px-10 mt-8'>
         <InputResearch placeholder="Cerca tra i salvati" Style="max-w-[250px] border" />
         <div className='mt-5'>
            <span className='font-bold text-lg'>Appunti di lezione</span>
            <div className='flex gap-16 text-center items-baseline'>
               <div className="text-start basis-2/4">
                  <OrderBy name="Data" />
                  <OrderBy name="Voti Positivi" />
               </div>
               <span className='text-[#9ea9b5] flex-1 invisible md:visible'>Anno</span>
               <span className='text-[#9ea9b5] flex-1 invisible md:visible 2xl:ml-7'>Voti</span>
               <span className='flex-1'></span>
            </div>
            <div>
               {/* <AnteprimaPdf profilo="true">
                  <SaveButton />
               </AnteprimaPdf>
               <AnteprimaPdf profilo="true">
                  <SaveButton />
               </AnteprimaPdf>
               <AnteprimaPdf profilo="true">
                  <SaveButton />
               </AnteprimaPdf>
               <AnteprimaPdf profilo="true">
                  <SaveButton />
               </AnteprimaPdf> */}
               
               
            </div>
         </div>
      </div>
   )
}

export default Content