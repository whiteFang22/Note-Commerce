import React from 'react'
import Nav from '../components/Nav/Nav'
import Intro from '../components/Abbonamento/Intro'
import Info from '../components/Abbonamento/Info'
import Paga from '../components/Abbonamento/Paga'
import Condition from '../components/Condition'

function Abbonamento() {
   return (
      <Condition>
         <div className="bg-slate-200 min-h-screen">
            <Nav more_color="black" input="1"></Nav>
            <div className="page-content-wrapper">
               <Intro />
               <section className="flex flex-col lg:flex-row px-5 gap-5">
                  <Info />
                  <Paga />
               </section>
            </div>
         </div>
      </Condition>
   )
}

export default Abbonamento