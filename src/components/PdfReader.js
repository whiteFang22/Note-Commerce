import React, { useState, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import ControlPanel from './ControlPanel';
import { Anchor, Row, Col } from 'antd';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PdfReader() {
   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);
   const [scale, setScale] = useState(1.0);

   function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
   }

   const pages = []
   let blur="";
   for (let i = 1; i <= numPages; i++) {
      if (i>4) blur="blur-sm";
      pages.push(
         <div className="bg-white p-2 rounded-xl mb-5" id={`page${i}`}>
            <Page pageNumber={i} scale={scale} className={blur}/>
         </div>
      );
   }

   const containerRef = useRef(null);
   
   var imageHeight = 860;
   const scrollToNextImage = () => {
      if (containerRef.current) {
         const container = containerRef.current;
         const currentScrollTop = container.scrollTop;
         console.log(imageHeight)

         // Calcola l'immagine successiva
         const nextImageIndex = Math.floor((currentScrollTop + imageHeight) / imageHeight);
         const nextImageOffset = nextImageIndex * imageHeight;

         // Esegui lo scrolling verso l'immagine successiva
         window.scrollTo({
            top: nextImageOffset,
            behavior: 'smooth',
         });
         imageHeight = imageHeight + 860;
      }
   };

   return (
      <>
         <div ref={containerRef} className="bg-slate-200 text-center h-200px flex flex-col items-center justify-center relative z-10">
            <Document file="/BASH-HTTP.pdf" onLoadSuccess={onDocumentLoadSuccess}>
               {pages}
            </Document>
         </div>

         <div className="flex flex-col justify-center items-center" onClick={scrollToNextImage}>
            <ControlPanel pageNumber={pageNumber} numPages={numPages} scale={scale} setScale={setScale} setPageNumber={setPageNumber} />
         </div>
      </>
   );
}

export default PdfReader