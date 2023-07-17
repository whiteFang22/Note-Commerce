import React, { useState, useContext } from 'react'
import axios from 'axios'
import { StateContext } from '../States'

function UploadModal(props) {
   const toggleModal = props.toggleModal
   const selectedFile = props.selectedFile
   const [state, setState] = useContext(StateContext);

   const [name, setName] = useState(undefined)
   const [year, setYear] = useState(undefined)
   const [language, setLanguage] = useState(undefined)
   const [university, setUniversity] = useState(undefined)
   const [course, setCourse] = useState(undefined)

   const date = new Date()

   const handleUpload = (e) => {
      e.preventDefault()
      toggleModal()
      if (selectedFile) {
         // FormData is a JavaScript object that allows you to easily create formatted data 
         // for sending HTTP requests, especially for file uploads
         const formData = new FormData();
         formData.append('pdf', selectedFile);
         formData.append('name', name);
         formData.append('year', year);
         formData.append('university', university);
         formData.append('course', course);
         formData.append('language', language);
         formData.append('creator', state.userId);

         axios.post('http://localhost:3500/upload', formData)
            .then((response) => {
               // abbono l'utente per un mese se non è abbonato
               if (state.premium===false){
                  console.log("premium:", state.premium)
                  axios.post('http://localhost:3500/create-subscription',{
                     userId: state.userId,
                     subscriptionType: "Mensile",
                     subscriptionDate: date
                  })
                  .then (response => {
                     setState({
                        user: state.user,
                        userId: state.userId,
                        university: state.university,
                        logged: true,
                        premium: true
                      })
                  })
               }
               props.setResponseText('caricamento andato a buon fine')
               props.setResponseColor('text-green-500')
               props.setReloading(true)
            })
            .catch((error) => {
               console.error('Errore durante la richiesta:', error);
               props.setResponseText('qualcosa è andato storto, riprova')
               props.setResponseColor('text-red-500')
            });
      } else {
         console.log('Riempi tutti i campi');
      }
   };

   return (
      <div className="modal w-screen h-screen fixed bottom-0 left-0 right-0 top-0">
         <div onClick={props.toggleModal} className='overlay w-screen h-screen fixed bottom-0 left-0 right-0 top-0 bg-transparent/30'></div>
         <div className="modal-content grid gap-y-3 relative bg-white text-black mx-auto mt-[10vh] py-4 px-7 w-[400px] border-2 rounded-3xl">
            <span className="font-bold text-lg mb-5">Compila i seguenti campi</span>
            <form onSubmit={handleUpload} className="contents form">
               <label className=''>Nome file</label>
               <input type="text" required className='border rounded-lg px-2 py-1 ' placeholder='Nome'
                  onChange={(e) => {
                     setName(e.target.value);
                  }} />
               <label className=''>Anno</label>
               <input type="number" required className='border rounded-lg px-2 py-1 ' placeholder='Anno'
                  onChange={(e) => {
                     setYear(e.target.value);
                  }} />
               <label className=''>Università</label>
               <input type="text" required className='border rounded-lg px-2 py-1 ' placeholder='Università'
                  onChange={(e) => {
                     setUniversity(e.target.value);
                  }} />
               <label className=''>Corso</label>
               <input type="text" required className='border rounded-lg px-2 py-1 ' placeholder='Corso'
                  onChange={(e) => {
                     setCourse(e.target.value);
                  }} />
               <label className=''>Lingua</label>
               <input type="text" required className='border rounded-lg px-2 py-1 ' placeholder='Lingua'
                  onChange={(e) => {
                     setLanguage(e.target.value);
                  }} />

               <button type="submit" className='broder rounded-full p-2 text-white bg-[#3092fa] hover:bg-[#2c86e7]'>Carica</button>
            </form>

            <button className="close-modal absolute top-5 right-5" onClick={props.toggleModal}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
               </svg>
            </button>
         </div>
      </div>
   )
}

export default UploadModal