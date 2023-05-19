import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import ControlPanel from './ControlPanel';


import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PdfReader(props) {
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const [scale, setScale] = useState(1.0);

   function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
   }
   const [pdfData, setPdfData] = useState(null);
   const id = props.id._id
   useEffect(() => {
      fetch(`http://localhost:3500/downloadOne?_id=${id}`) // Aggiungi l'URL corretto del tuo endpoint per ottenere il file PDF
         .then(response => response.blob())
         .then(data => {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
               setPdfData(fileReader.result);
            };
            fileReader.readAsDataURL(data);
         });
   }, []);

   const pages = []
   let blur = "";
   for (let i = 1; i <= numPages; i++) {
      if (i > 10) blur = "blur-sm";
      pages.push(
         <div className="bg-white p-2 rounded-xl mb-5 scroll-mt-[80px]" id={`page-${i}`}>
            <Page pageNumber={i} scale={scale} className={blur} />
         </div>
      );
   }

   return (
      <>
         <div className="bg-slate-200 text-center h-200px flex flex-col items-center justify-center relative z-10">
            <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
               {pages}
            </Document>
         </div>

         <div className="flex flex-col justify-center items-center">
            <ControlPanel pageNumber={pageNumber} numPages={numPages} scale={scale} setScale={setScale} setPageNumber={setPageNumber} />
         </div>


      </>
   );
}

export default PdfReader