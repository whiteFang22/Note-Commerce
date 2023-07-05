import React, {useState} from 'react'
import Log from "./Log"

function Registrati() {
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
         <button onClick={toggleRegistration} className="rounded-full bg-[#e0ff6e] hover:bg-[#cbef49] px-4 py-2 text-black h-fit">Registrati</button>
         {(login||registration) && ( <Log toggleLogin={toggleLogin} toggleRegistration={toggleRegistration} toggleModal={toggleModal} registration={registration}/> )}
      </>
   )
}

export default Registrati