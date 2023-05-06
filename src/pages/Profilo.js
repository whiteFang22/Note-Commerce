import React from 'react'
import Nav from '../components/Nav/Nav'
import Head from '../components/Profilo/Head'
import Content from '../components/Profilo/Content'

function Profilo() {
   return (
      <>
         <Nav input="1" nav_color="[#f6f7fb]"/>
         <Head/>
         <Content/>
      </>
   )
}

export default Profilo