import React, { useState, useRef } from "react";
import FormInput from "./FormInput";

function Content(){
   
   return (
      <div className=" mt-40 mx-[20%]">
         <div className="content text-center">
            <p className="font-extrabold text-5xl whitespace-pre-line">
               <span>Per diventare più intelligenti </span>
               <span>insieme</span>
            </p>
            <p className="text-lg whitespace-pre-line mt-7">
               <span className='block'>Trova appunti di studio con le migliori </span>
               <span className='md:block'>recensioni da parte di studenti che seguono i </span>
               tuoi stessi corsi.
            </p>  
         </div>
         <div className="form bg-white p-4 mt-10 rounded-full border-2 border-transparent hover:border-blue-400">
            <FormInput />
         </div>
      </div>
   );
}

export default Content;