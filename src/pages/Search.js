import React from 'react'
import Nav from '../components/Nav/Nav'
import Filters from '../components/Search/Filters'
import FContent from '../components/Search/FContent'
import { useLocation } from 'react-router-dom'

function Search() {
  const location = useLocation();
  console.log(location)
  return (
    <>
      <section className="sticky top-0">
        <Nav input="1" more_color="black" nav_color="slate-200"/>
      </section>
      <Filters></Filters>
      <FContent></FContent>
    </>
  )
}

export default Search;