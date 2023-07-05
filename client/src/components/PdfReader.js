import React, { useState, useEffect, useContext } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import ControlPanel from './ControlPanel';
import { StateContext } from './States';


import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PdfReader(props) {
   const [state] = useContext(StateContext);

   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const [scale, setScale] = useState(1.0);

   function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
   }
   const [pdfData, setPdfData] = useState(null);
   const _id = props._id

   useEffect(() => {
      fetch(`http://localhost:3500/downloadOne?_id=${_id}`)
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
      // nascondo le pagine se l'utente è non premiume se non è il creatore
      if ((i > 2) && !(state.premium) && !(state.userId == props.creator)) blur = "blur-sm";
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