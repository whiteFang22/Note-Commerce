import React from 'react'
import Nav from '../components/Nav/Nav'
import Content from '../components/Content'
function Home() {

  return (
    <div className="bg-violet-studocu text-white h-screen">
      <Nav more_color="white"></Nav>
      <Content></Content>
    </div>
  )
}

export default Home