import React, { useState } from 'react'

function Filters(props) {
   const { setUpdate,  setUniversity, setCourse, setLanguage } = props
   const [loading, setLoading] = useState(false)
   const [selectedOption, setSelectedOption] = useState('');
   const { university, language, course, update } = props.filterProps

   const handleOptionChange = (event) => {
      const value = event.target.value
      switch (event.target.id) {
         case 'university':
            setUniversity(value);
            break
         case 'course':
            setCourse(value);
            break
         case 'language':
            setLanguage(value);
            break
      }
      setUpdate(update+1)
      console.log(update)
   };

   return (
      <div className="mx-10 mt-6 filters flex flex-wrap flex-col lg:flex-row">

         <div className="basis-1/4 px-3">
            <label htmlFor="university" className="text-sm font-thinh">Filtro scuola/università</label>
            <div>
               <select value={university} name="university" id="university" className="border rounded-lg w-full p-2" onChange={handleOptionChange}>
                  <option value={undefined}></option>
                  <option value="UNIPR">UNIPR</option>
                  <option value="UNIPA">UNIPA</option>
                  <option value="UNITO">UNITO</option>
               </select>
            </div>
         </div>

         <div className="basis-1/4 px-3">
            <label htmlFor="course" className="text-sm font-thinh">Filtro per corso</label>
            <div>
               <select value={course} name="course" id="course" className="border rounded-lg w-full p-2" onChange={handleOptionChange}>
                  <option value={undefined}></option>
                  <option value="Basi di dati e Web">Basi di dati e Web</option>
                  <option value="Modelli e algoritmi per il supporto alle decisioni">Modelli e algoritmi per il supporto alle decisioni</option>
                  <option value="Architettura dei calcolatori elettronici">Architettura dei calcolatori elettronici</option>
               </select>
            </div>
         </div>

         <div className="basis-1/4 px-3">
            <label htmlFor="language" className="text-sm font-thinh">Filtra per lingua</label>
            <div>
               <select value={language} name="language" id="language" className="border rounded-lg w-full p-2" onChange={handleOptionChange}>
                  <option value="italiano">italiano</option>
                  <option value="inglese">inglese</option>
                  <option value="spagnolo">spagnolo</option>
               </select>
            </div>
         </div>
      </div>
   )
}

export default Filters