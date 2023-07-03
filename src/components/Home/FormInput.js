import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'

function FormInput(props) {
   const [search, setSearch] = useState()
   const searchInput = useRef(null)

   const updateSearch = () => {
      if (searchInput.current){
         console.log(searchInput.current.value)
         setSearch(searchInput.current.value)
      }
   }

   const prevent = (e) => {
      e.preventDefault()
   }

   // il bottone di invio ricerca causa un refresh della pagina di ricerca solo se ci troviamo in essa
   const handle = () => {
      if (props.searchPage)
         props.setUpdate(props.update+1)
   }

   return (
      <form className="flex" onSubmit={prevent}>
         <input type={"text"} ref={searchInput} defaultValue={props.name} onChange={updateSearch}  className="outline-transparent ml-3 text-black w-full" placeholder="Cerca insegnamenti, libri o appunti" required />
         <Link to="/search" state={{ search: search }} type="submit" className="mr-3 bg-white" onClick={handle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 stroke-black fill-black">
               <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
         </Link>
      </form>
   )
}

export default FormInput