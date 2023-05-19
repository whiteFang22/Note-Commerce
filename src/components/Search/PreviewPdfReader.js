import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'


import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PreviewPdfReader(props) {
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const [scale, setScale] = useState(0.1);

   function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
   }
   const [pdfData, setPdfData] = useState(null);
   const id = props.id
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

   return (
      <>
         <div className="bg-slate-200 text-center h-200px flex flex-col items-center justify-center relative z-10">
            <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
               <Page pageNumber={2} scale={scale}></Page>
            </Document>
         </div>

      </>
   );
}

export default PreviewPdfReader