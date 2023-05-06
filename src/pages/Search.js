import React from 'react'
import Nav from '../components/Nav/Nav'
import Filters from '../components/Search/Filters'
import AnteprimaPdf from '../components/Search/AnteprimaPdf'
import { useLocation } from 'react-router-dom'

function Search() {
  const location = useLocation();
  console.log(location)
  return (
    <>
      <Nav input="1" more_color="black" nav_color="slate-200" />
      <Filters></Filters>
      <section className='mt-10 mx-8'>
        <AnteprimaPdf></AnteprimaPdf>
        <AnteprimaPdf></AnteprimaPdf>
        <AnteprimaPdf></AnteprimaPdf>
        <AnteprimaPdf></AnteprimaPdf>
        <AnteprimaPdf></AnteprimaPdf>
      </section>
    </>
  )
}

export default Search;