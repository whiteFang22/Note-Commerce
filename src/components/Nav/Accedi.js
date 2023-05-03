import React, { useState } from 'react'
import Log from './Log';

function Accedi(props) {
   const [login, setLogin] = useState(false);
   const [registration, setRegistration] = useState(false);

   const toggleLogin = () => {
      if (registration) toggleRegistration();
      setLogin(!login);
   }

   const toggleRegistration = () => {
      if (login) toggleLogin();
      setRegistration(!registration);
   }

   const toggleModal = () => {
      if (registration) toggleRegistration();
      if (login) toggleLogin();
   }

   return (
      <>
         <button onClick={toggleLogin} className='mr-4'>Accedi</button>

         {/* if modal=true, return what inside (...) 
             la funzione nel componente  padre verrà 
             richiamata quando fai clic sul pulsante nel componente figlio*/}
         {(login||registration) && ( <Log toggleLogin={toggleLogin} toggleRegistration={toggleRegistration} toggleModal={toggleModal} registration={registration}/> )}
      </>
   )
}

export default Accedi