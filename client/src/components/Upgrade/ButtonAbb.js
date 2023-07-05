import React from 'react'
import { Link } from 'react-router-dom'

function ButtonAbb() {
   return (
      <button className="mt-4 p-3 bg-[#416467] rounded-full text-[#e0ff6e] font-semibold">
         <Link to="/abbonamento">Prova gratis l'abbonamento per 30 griorni</Link>
      </button>
   )
}

export default ButtonAbb