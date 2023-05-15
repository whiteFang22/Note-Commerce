import React from 'react'

function ControlPanel(props) {
   const {setPageNumber, pageNumber, numPages, scale, setScale} = props;

   // Controlli per cambiare pagina
   const nextPage = () => {
      if (pageNumber!=numPages) setPageNumber(pageNumber+1)
   }

   const previousPage = () => {
      if (pageNumber!=1) setPageNumber(pageNumber-1)
   }

   // Controlli per zommare la pagina
   const isMinZoom = scale <= 0.5;
   const isMaxZoom = scale >= 2.0;

   const zoomIn = () => {
      if (!isMaxZoom) setScale(scale + 0.1)
   }

   const zoomOut = () => {
      if (!isMinZoom) setScale(scale - 0.1)
   }

   return (
      <div className="flex justify-center gap-3 p-3 bg-slate-200 my-3 rounded-xl px-10 fixed bottom-[5px] z-30">
         <button onClick={previousPage}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
               <path d="M7.712 4.819A1.5 1.5 0 0110 6.095v2.973c.104-.131.234-.248.389-.344l6.323-3.905A1.5 1.5 0 0119 6.095v7.81a1.5 1.5 0 01-2.288 1.277l-6.323-3.905a1.505 1.505 0 01-.389-.344v2.973a1.5 1.5 0 01-2.288 1.276l-6.323-3.905a1.5 1.5 0 010-2.553L7.712 4.82z" />
            </svg>
         </button>

         <div>
            Page {pageNumber} of {numPages}
         </div>

         <button onClick={nextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
               <path d="M3.288 4.819A1.5 1.5 0 001 6.095v7.81a1.5 1.5 0 002.288 1.277l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 002.288 1.276l6.323-3.905a1.5 1.5 0 000-2.553L12.288 4.82A1.5 1.5 0 0010 6.095v2.973a1.506 1.506 0 00-.389-.344L3.288 4.82z" />
            </svg>
         </button>


         <button onClick={zoomOut}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
               <path d="M6.75 8.25a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
               <path fill-rule="evenodd" d="M9 2a7 7 0 104.391 12.452l3.329 3.328a.75.75 0 101.06-1.06l-3.328-3.329A7 7 0 009 2zM3.5 9a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z" clip-rule="evenodd" />
            </svg>
         </button>

         <span>{(scale*100).toFixed()}%</span>

         <button onClick={zoomIn}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
               <path d="M9 6a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 6z" />
               <path fill-rule="evenodd" d="M2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9zm7-5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" clip-rule="evenodd" />
            </svg>
         </button>
         
      </div>
   )
}

export default ControlPanel