import React from 'react'
import Nav from '../components/Nav/Nav'
import Intro from '../components/Abbonamento/Intro'
import Info from '../components/Abbonamento/Info'
import Paga from '../components/Abbonamento/Paga'

function Abbonamento() {
   return (
      <div className="bg-slate-200 h-screen">
         <Nav more_color="black" input="1"></Nav>
         <div class="page-content-wrapper">
            <Intro />
            <section class="flex flex-col lg:flex-row px-5 gap-5">
               <Info />
               <Paga />
            </section>
         </div>
      </div>
   )
}

export default Abbonamento