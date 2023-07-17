import React, { useEffect, useState } from 'react'

function Filters(props) {
   const { setUpdate, setUniversity, setCourse, setLanguage } = props
   // const [loading, setLoading] = useState(false)
   // const [selectedOption, setSelectedOption] = useState('')
   const { university, language, course, update, universities, languages } = props.filterProps

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
      setUpdate(update + 1)
      console.log(update)
   };

   useEffect(() => {
      setUpdate(update + 1)
   }, [])

   return (
      <div className="mx-10 mt-6 filters flex flex-wrap flex-col lg:flex-row">

         <div className="basis-1/4 px-3">
            <label htmlFor="university" className="text-sm font-thinh">Filtro scuola/università</label>
            <div>
               <select value={university} name="university" id="university" className="border rounded-lg w-full p-2" onChange={handleOptionChange}>
                  <option value={undefined}></option>
                  {universities.map((name, index) => (
                     <option key={index} value={name}>
                        {name}
                     </option>
                  ))}
               </select>
            </div>
         </div>

         <div className="basis-1/4 px-3">
            <label htmlFor="language" className="text-sm font-thinh">Filtra per lingua</label>
            <div>
               <select value={language} name="language" id="language" className="border rounded-lg w-full p-2" onChange={handleOptionChange}>
                  {languages.map((name, index) => (
                     <option key={index} value={name}>
                        {name}
                     </option>
                  ))}
               </select>
            </div>
         </div>
      </div>
   )
}

export default Filters