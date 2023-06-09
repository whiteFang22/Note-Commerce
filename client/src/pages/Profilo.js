import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Head from '../components/Profilo/Head'
import Content from '../components/Profilo/Content'
import Condition from '../components/Condition'


function Profilo() {
  const [update, setUpdate] = useState(0)

   return (
      <Condition>
         <Nav input="1" nav_color="[#f6f7fb]" setUpdate={setUpdate}/>
         <Head />
         <Content />
      </Condition>
   )
}

export default Profilo