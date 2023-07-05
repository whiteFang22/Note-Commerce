import React from 'react'
import Nav from '../components/Nav/Nav'
import Info from '../components/Upgrade/Info'
import Confronto from '../components/Upgrade/Confronto'
import PianoTariffario from '../components/Upgrade/PianoTariffario'
import Condition from '../components/Condition'

function Upgrade() {
   return (
      <Condition>
         <Nav input="1" more_color="black" nav_color="[#e0ff6e]" />
         <Info />
         <Confronto />
         <PianoTariffario />
      </Condition>
   )
}

export default Upgrade