import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import Filters from '../components/Search/Filters'
import AnteprimaPdf from '../components/Search/AnteprimaPdf'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


// import { Document, Page, pdfjs } from 'react-pdf'

// // necessary to use react-pdf
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Search(props) {
  const location = useLocation();
  const name = location.state?.search;

  const [numPages, setNumPages] = useState(null)
  const [pdfs, setPdfs] = useState({})

  const [isLoading, setIsLoading] = useState(true)
  const [update, setUpdate] = useState(0)
  
  const [university, setUniversity] = useState()
  const [course, setCourse] = useState()
  const [language, setLanguage] = useState("italiano")

  const params = {
    name: name,
    course: course,
    language: language,
    university: university
  }

  const startUpdate = () => {
    console.log(university)
    const url = `http://localhost:3500/download`;
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        setPdfs(response.data)
        // console.log(pdfs)
        // allow to load AnteprimaPdf only when finished to download data from server
        setIsLoading(false)
      })
      .catch(error => {
        console.log("error")
      });
  }

  useEffect(() => {
    startUpdate()
    console.log("ok")
  }, [update]);
  
  const filterProps = {
    update: update,
    university: university,
    language: language
  }

  return (
    <>
      <Nav input="1" more_color="black" nav_color="slate-200" searchInput={name} setUpdate={setUpdate} update={update}/>
      <Filters filterProps={filterProps} setUpdate={setUpdate} setUniversity={setUniversity} setCourse={setCourse} setLanguage={setLanguage}></Filters>
      <section className='mt-10 mx-8'>
        {isLoading === false &&
          pdfs.map((pdf, index) => (
            <AnteprimaPdf key={index} pdf={pdf}></AnteprimaPdf>
          ))
        }
      </section>
    </>
  )
}

export default Search;