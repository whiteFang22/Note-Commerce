import React, { useState } from 'react'
import Login from './Login';

function Accedi() {
   const [login, setLogin] = useState(false);
   const [registration, setRegistration] = useState(false);

   const toggleLogin = () => {
      {registration && toggleRegistration()}
      setLogin(!login);
   }

   const toggleRegistration = () => {
      {login && toggleLogin()}
      setRegistration(!registration);
   }

   const toggleModal = () => {
      {registration && toggleRegistration()}
      {login && toggleLogin()}
   }

   return (
      <>
         <button onClick={toggleLogin} className='mr-4'>Accedi</button>

         {/* if modal=true, return what inside (...) 
             la funzione nel componente  padre verrà 
             richiamata quando fai clic sul pulsante nel componente figlio*/}
         {(login||registration) && ( <Login toggleLogin={toggleLogin} toggleRegistration={toggleRegistration} toggleModal={toggleModal} registration={registration}/> )}
      </>
   )
}

export default Accedi