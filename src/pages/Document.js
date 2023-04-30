import React from 'react'
import Nav from '../components/Nav/Nav'

function Document() {
   return (
      <div>
         <Nav input="1" nav_color="slate-200"/>
         <div class="bg-slate-200">
            <embed class="mx-auto w-[500px] h-[800px] border-white border-[0px] overflow-hidden" src="pdf/BASH-HTTP.pdf#toolbar=0" />
         </div>
      </div>
   )
}

export default Document