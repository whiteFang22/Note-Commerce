import React from 'react'
import Nav from '../components/Nav/Nav'
import PdfReader from '../components/Document/PdfReader';
import { useLocation } from 'react-router-dom'

function Document() {
   const location = useLocation();
   const _id = location.state?._id._id;
   console.log(location.state?._id)
   const creator = location.state?._id.creator;
   console.log(creator)

   return (
      <div className='scroll-smooth'>
         <Nav input="1" nav_color="slate-200" ></Nav> 
         <PdfReader _id={_id} creator={creator}/>
      </div>
   )
}

export default Document