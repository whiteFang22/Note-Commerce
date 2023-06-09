import React, { useState, useEffect, useContext } from 'react'
import Nav from '../components/Nav/Nav'
import Filters from '../components/Search/Filters'
import AnteprimaPdf from '../components/Search/AnteprimaPdf'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import SaveButton from '../components/Profilo/SaveButton'
import { StateContext } from '../components/States'

function Search(props) {
  const location = useLocation();
  let name = location.state?.search;

  // const [numPages, setNumPages] = useState(null)
  const [pdfs, setPdfs] = useState({})
  const [savedPdfs, setSavedPdfs] = useState([])
  const [universities, setUniversities] = useState([])
  const [languages, setLanguages] = useState([])

  const [state] = useContext(StateContext);
  const userId = state.userId

  const [isLoading, setIsLoading] = useState(true)
  const [update, setUpdate] = useState(0)

  const [university, setUniversity] = useState('')
  const [course, setCourse] = useState('')
  const [language, setLanguage] = useState("italiano")

  let params = {
    name: name,
    course: course,
    language: language,
    university: university
  }

  const startUpdate = () => {
    params.name = location.state?.search;
    if (name === '') return
    // only if input is not empty
    setIsLoading(true)
    console.log(university)
    const url = `http://localhost:3500/download`;
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        setPdfs(response.data)
        // allow to load AnteprimaPdf only when finished to download data from server
        setIsLoading(false)
      })
      .catch(error => {
        console.log("error")
      });
  }

  const retriveSavedPdfsIds = async (userId) => {
    try {
      const response = await axios.post('http://localhost:3500/savedPdfsIds', {
        _id: userId
      });
      setSavedPdfs(response.data)
    } catch (error) {
      // Gestisci gli errori qui
      console.error(error);
    }
  };
  
  const retriveUniversitiesAndLanguages = async () => {
    try {
      const response1 = await axios.get('http://localhost:3500/universities')
      const response2 = await axios.get('http://localhost:3500/languages')
      setUniversities(response1.data)
      setLanguages(response2.data)

    } catch(error) {
      console.error(error);
    }  
 }


  useEffect(() => {
    retriveUniversitiesAndLanguages()
    startUpdate()
    if (state.logged) retriveSavedPdfsIds(userId)
  }, [update]);


  const filterProps = {
    update: update,
    university: university,
    language: language,
    universities: universities,
    languages: languages
  }

  return (
    <>
      <Nav searchPage={1} input="1" more_color="black" nav_color="slate-200" searchInput={name} setUpdate={setUpdate} update={update} />
      <Filters filterProps={filterProps} setUpdate={setUpdate} setUniversity={setUniversity} setCourse={setCourse} setLanguage={setLanguage}></Filters>
      <section className='mt-10 mx-8'>
        {isLoading === false &&
          pdfs.map((pdf, index) => (
            <AnteprimaPdf key={index} pdf={pdf}><SaveButton pdfId={pdf._id} savedPdfs={savedPdfs} /></AnteprimaPdf>
          ))
        }
        {isLoading === true &&
          <>
            <div role="status" className='flex items-center justify-center h-full'>
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>

          </>
        }
        {
          (pdfs.length === 0 && isLoading === false) &&
          <span className='flex justify-center text-red-600 text-lg'>Nessun contenuto trovato </span>
        }
      </section>
    </>
  )
}

export default Search;