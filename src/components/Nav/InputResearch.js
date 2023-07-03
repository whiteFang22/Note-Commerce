import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../Home/FormInput'

function InputResearch(props) {
   const { update, setUpdate, name } = props

   return (
      <div className={`form w-full ${props.Style} bg-white p-2 w-4xl rounded-full border border-tansparent hover:border-blue-400`}>
         {/* <form className="flex">
            <input type={"text"} ref={searchInput} onChange={updateSearch} defaultValue={name} className="outline-transparent ml-3 text-black w-full" placeholder="Cerca insegnamenti, libri o appunti" />
            <Link to="/search" state={{ search: search }} type="submit" className="mr-3 bg-white" onClick={aggiorna}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 stroke-black fill-black">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
               </svg>
            </Link>
         </form> */}
         <FormInput searchPage={props.searchPage} setUpdate={setUpdate} update={update} name={name}/>
      </div>
   )
}

export default InputResearch