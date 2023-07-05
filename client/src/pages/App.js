import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';

const PdfViewer = () => {
   const [pdfData, setPdfData] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get('http://localhost:3500/download');
            setPdfData(response.data);
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
   }, []);

   if (!pdfData) {
      return <div>Caricamento...</div>;
   }

   //   const decodedPdfData = atob(response.data.pdfData);
   //   const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });
   //   const pdfUrl = URL.createObjectURL(pdfBlob);

   return (
      <div>
         {/* <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" /> */}
         <Document
            file={{ data: pdfData }}>
            <Page pageNumber={1} />
         </Document>
      </div>
   );
};

export default PdfViewer;
