import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import axios from 'axios'
import PdfReader from '../components/PdfReader';

function Document() {
   const [pdfData, setPdfData] = useState(null);

   // useEffect(() => {
   //    fetch('http://localhost:3500/download') // Aggiungi l'URL corretto del tuo endpoint per ottenere il file PDF
   //       .then(response => response.blob())
   //       .then(data => {
   //          const fileReader = new FileReader();
   //          fileReader.onloadend = () => {
   //             setPdfData(fileReader.result);
   //          };
   //          fileReader.readAsDataURL(data);
   //       });
   // }, []);

   return (
      <div>
         <Nav input="1" nav_color="slate-200" />
         {/* <div className="bg-slate-200">
            <embed className="mx-auto w-[500px] h-[800px] border-white border-[0px] overflow-hidden" src="pdf/BASH-HTTP.pdf#toolbar=0" />
         </div> */}
         {/* {pdfData ? (
            <embed src={pdfData} type="application/pdf" width="100%" height="600px" />
         ) : (
            <p>Caricamento del PDF...</p>
         )} */}
         <PdfReader />
         
      </div>
   )
}

export default Document