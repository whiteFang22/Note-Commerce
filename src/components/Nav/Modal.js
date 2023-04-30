import React, {useState} from 'react'
import Accedi from './Accedi';
import Registrati from './Registrati';
import Login from './Login';

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
         {props.type="1" && <Accedi />}
         {props.type="2" && <Registrati />}
         {(login||registration) && ( <Login toggleLogin={toggleLogin} toggleRegistration={toggleRegistration} toggleModal={toggleModal} registration={registration}/> )}
      </div>
   )
}

export default Modal