import React from 'react'
import Nav from '../components/Nav/Nav'
import Content from '../components/Home/Content'

function Home() {
  return (
    <div className="bg-violet-studocu min-h-screen text-white">
      <Nav more_color="white"></Nav>
      <Content></Content>
    </div>
  )
}

export default Home