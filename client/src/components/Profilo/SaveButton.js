import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import { StateContext } from '../States';


function SaveButton(props) {
   const [state] = useContext(StateContext);
   const userId = state.userId
   const [showButton, setShowButton] = useState(true)
   const { pdfId, savedPdfs } = props

   async function savePdf() {
      await axios.post('http://localhost:3500/savePdf', {
         userId: userId,
         pdfId: pdfId
      })
      setShowButton(false)
   }

   async function buttonVisibility() {
      if (savedPdfs.length !== 0) {
         if (savedPdfs.includes(pdfId)) {
            setShowButton(false)
         }
      }
   }

   useEffect(() =>{
      buttonVisibility()
   })

   return (
      <>
         {(showButton && state.logged) &&
            <button onClick={savePdf} className='border rounded-full flex gap-3 py-2 px-4 h-10 items-center bg-white hover:bg-slate-100 w-[100px] md:w-fit ml-24 md:ml-0'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5 stroke-slate-400 fill-green-400 hover:fill-red-600">
                  <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clipRule="evenodd" />
               </svg>
               <span>Salva</span>
            </button>
         }

      </>

   )
}

export default SaveButton