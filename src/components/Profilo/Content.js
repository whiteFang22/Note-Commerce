import React, { useContext, useState, useEffect } from 'react'
import AnteprimaPdf from '../Search/AnteprimaPdf'
import InputResearch from '../Nav/InputResearch'
import OrderBy from './OrderBy'
import DeleteButton from './RemoveButton'
import Upload from './Upload'
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
         <div className='flex'>
            {/* <InputResearch placeholder="Cerca tra i salvati" Style="max-w-[250px] border" /> */}
            <Upload></Upload>
         </div>
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
               {(isLoading === false && pdfs.length !== 0) &&
                  pdfs.map((pdf, index) => (
                     <AnteprimaPdf key={index} pdf={pdf}><DeleteButton setReloading={setReloading} pdfId={pdf._id} /></AnteprimaPdf>
                  ))
               }
               {isLoading === true &&
                  <div role="status" className='flex items-center justify-center h-full'>
                     <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                     </svg>
                  </div>
               }
            </div>
         </div>
      </div>
   )
}

export default Content