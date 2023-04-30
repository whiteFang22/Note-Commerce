import React from 'react'
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <div className="modal w-screen h-screen fixed bottom-0 left-0 right-0 top-0">
      <div onClick={props.toggleModal} className='overlay w-screen h-screen fixed bottom-0 left-0 right-0 top-0'></div>
      <div className="modal-content grid gap-y-3 relative bg-white text-black mx-auto mt-[10vh] py-4 px-7 w-[400px] border-2 rounded-3xl">
        <span className="font-bold text-lg mb-5">Benvenuto su Studocu</span>
        <from className="contents">
          {props.registration && (
            <>
              <label className=''>Nome</label>
              <input type="text" className='border rounded-lg px-2 py-1 ' placeholder='Nome' />
              <label className=''>Cognome</label>
              <input type="text" className='border rounded-lg px-2 py-1 ' placeholder='Cognome' />
            </>
          )}

          <label className=''>Email</label>
          <input type="text" className='border rounded-lg px-2 py-1 ' placeholder='Email' />
          <label className=''>Password</label>
          <input type="text" className='border rounded-lg px-2 py-1 ' placeholder='Password' />

          <Link className="text-sm text-[#3092fa] hover:text-[#2c67e7] justify-self-end">Ho dimenticato la password</Link>

          <button className='broder rounded-full p-2 text-white bg-[#3092fa] hover:bg-[#2c86e7]'>Accedi</button>
        </from>

        {props.registration ?
            <div className='flex flex-row justify-center my-3'>
              <span>Hai già un account?</span>
              <button onClick={props.toggleLogin} className='text-[#3092fa] hover:text-[#2c67e7]'>Entra</button>
            </div>
          :
            <div className='flex flex-col text-center my-3'>
              <span>Non hai un account?</span>
              <button onClick={props.toggleRegistration} className='text-[#3092fa] hover:text-[#2c67e7]'>Registrati gratuitamente!</button>
            </div>
        }
        
        <button className="close-modal absolute top-5 right-5" onClick={props.toggleModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Login