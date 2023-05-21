import React, { useContext, useState, useEffect } from 'react'
import AnteprimaPdf from '../Search/AnteprimaPdf'
import InputResearch from '../Nav/InputResearch'
import OrderBy from './OrderBy'
import DeleteButton from './RemoveButton'
import { StateContext } from '../States'
import axios from 'axios'

//  userId --> (/userPdfs) savedPdfsIds --> foreach (/downloadOne) pdfContent

function Content(props) {
   const [state] = useContext(StateContext);

   const [isLoading, setIsLoading] = useState(true)
   const [reload, setReloading] = useState(false) //reload the page when a pdf is removed
   const [pdfs, setPdfs] = useState([])
   // const [update, setUpdate] = useState(0)

   const fetchContents = async (userId) => {
      try {
         const response = await axios.post(`http://localhost:3500/userPdfs`, {
            _id: userId
         });
         setPdfs(response.data)
         setIsLoading(false)

      } catch (error) {
         // Gestisci gli errori qui
         console.error(error);
      }
   };

   useEffect(() => {
      const { userId } = state
      fetchContents(userId)
   }, [reload])

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
               {(isLoading === false && pdfs.length!==0) &&
                  pdfs.map((pdf, index) => (
                     <AnteprimaPdf key={index} pdf={pdf}><DeleteButton setReloading={setReloading} pdfId={pdf._id}/></AnteprimaPdf>
                  ))
               }


            </div>
         </div>
      </div>
   )
}

export default Content