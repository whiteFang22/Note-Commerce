import React, {useState} from 'react'
// import Accedi from './Accedi';
// import Registrati from './Registrati';
import Log from './Log';

function Modal(props) {
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
      <div>
         {/* {props.accedi=true && <Accedi />}
         {props.registrati=true && <Registrati />} */}
         {(login||registration) && ( <Log toggleLogin={toggleLogin} toggleRegistration={toggleRegistration} toggleModal={toggleModal} registration={registration}/> )}
      </div>
   )
}

export default Modal