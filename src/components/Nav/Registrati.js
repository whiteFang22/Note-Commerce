import React, {useState} from 'react'
import Login from "./Login"

function Registrati() {
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
         <button onClick={toggleRegistration} className="rounded-full bg-[#e0ff6e] hover:bg-[#cbef49] px-4 py-2 text-black h-fit">Registrati</button>
         {(login||registration) && ( <Login toggleLogin={toggleLogin} toggleRegistration={toggleRegistration} toggleModal={toggleModal} registration={registration}/> )}
      </>
   )
}

export default Registrati