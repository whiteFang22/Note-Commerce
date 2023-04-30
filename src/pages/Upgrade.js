import React from 'react'
import Nav from '../components/Nav/Nav'
import Info from '../components/Upgrade/Info'
import Confronto from '../components/Upgrade/Confronto'
import PianoTariffario from '../components/Upgrade/PianoTariffario'
function Upgrade() {
   return (
      <>
      <section className="sticky top-0">
         <Nav input="1" more_color="black" nav_color="[#e0ff6e]"/>
      </section>
      <Info/>
      <Confronto/>
      <PianoTariffario/>
      </>
   )
}

export default Upgrade