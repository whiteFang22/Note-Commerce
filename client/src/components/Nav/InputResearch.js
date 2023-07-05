import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../Home/FormInput'

function InputResearch(props) {
   const { update, setUpdate, name } = props

   return (
      <div className={`form w-full ${props.Style} bg-white p-2 w-4xl rounded-full border border-tansparent hover:border-blue-400`}>
         <FormInput searchPage={props.searchPage} setUpdate={setUpdate} update={update} name={name}/>
      </div>
   )
}

export default InputResearch