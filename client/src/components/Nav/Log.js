import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { StateContext } from '../States';
import axios from 'axios'

function Log(props) {
  const [state, setState] = useContext(StateContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("")

  const [authenticationError, setAuthenticationError] = useState(false)

  async function registration() {
    try {
      // Esegui la richiesta POST al server utilizzando Axios
      axios.post('http://localhost:3500/registration', {
        name: name,
        surname: surname,
        email: email,
        password: password,
        university: university
      })
        .then(response => {
          // Gestisci la risposta di successo
          const { userId } = response.data
          setState({
            user: email,
            userId: userId,
            university: university,
            logged: true,
            premium: false
          });
          setAuthenticationError(false)
        })
        .catch(error => {
          setAuthenticationError(true)
          // Gestisci l'errore
          if (error.response) {
            // La richiesta è stata effettuata e il server ha risposto con uno stato di errore
            console.error('Errore di risposta del server:', error.response.status);
            console.log('Messaggio di errore del server:', error.response.data);
          } else if (error.request) {
            // La richiesta è stata effettuata ma non è stata ricevuta alcuna risposta
            console.error('Nessuna risposta ricevuta dal server:', error.request);
          } else {
            // Si è verificato un errore durante la configurazione della richiesta
            console.error('Errore durante la configurazione della richiesta:', error.message);
          }
        });

    } catch (error) {
      console.error('Errore durante la richiesta GET:', error);
    }
  }

  async function singIn() {
    axios.post('http://localhost:3500/login', {
      email: email,
      password: password
    })
      .then(response => {
        // Gestisci la risposta di successo
        const { userId, premium } = response.data
        if (premium) {
          axios.post('http://localhost:3500/checkSubscription', {
            userId: userId
          })
            .then(response => {
              const { user, premium, university } = response.data
              setState({
                user: user,
                userId: userId,
                logged: true,
                premium: premium,
                university: university
              });
              setAuthenticationError(false)
            })
        }
        else {
          const { user, premium, university } = response.data
          setState({
            user: user,
            userId: userId,
            logged: true,
            premium: premium,
            university: university
          });
          setAuthenticationError(false)
        }
      })
      .catch(error => {
        setAuthenticationError(true)
        // Gestisci l'errore
        if (error.response) {
          // La richiesta è stata effettuata e il server ha risposto con uno stato di errore
          console.error('Errore di risposta del server:', error.response.status);
          console.log('Messaggio di errore del server:', error.response.data);
        } else if (error.request) {
          // La richiesta è stata effettuata ma non è stata ricevuta alcuna risposta
          console.error('Nessuna risposta ricevuta dal server:', error.request);
        } else {
          // Si è verificato un errore durante la configurazione della richiesta
          console.error('Errore durante la configurazione della richiesta:', error.message);
        }
      });
  }

  async function sign(e) {
    e.preventDefault();
    if (!props.registration) singIn()
    else registration()
  }

  return (
    <div className="modal w-screen h-screen fixed bottom-0 left-0 right-0 top-0">
      <div onClick={props.toggleModal} className='overlay w-screen h-screen fixed bottom-0 left-0 right-0 top-0 bg-transparent/30'></div>
      <div className="modal-content grid gap-y-3 relative bg-white text-black mx-auto mt-[10vh] py-4 px-7 w-[400px] border-2 rounded-3xl">
        <Link to="/" className="font-bold text-lg mb-5 hover:underline">Benvenuto su Studocu</Link>
        <form onSubmit={sign} className="contents form">
          {props.registration && (
            <>
              <label className=''>Nome</label>
              <input type="text" required className={!authenticationError ? 'border rounded-lg px-2 py-1' : 'border border-red-600 rounded-lg px-2 py-1'} placeholder='Nome'
                onChange={(e) => {
                  setName(e.target.value);
                }} />
              <label className=''>Cognome</label>
              <input type="text" required className={!authenticationError ? 'border rounded-lg px-2 py-1' : 'border border-red-600 rounded-lg px-2 py-1'} placeholder='Cognome'
                onChange={(e) => {
                  setSurname(e.target.value);
                }} />
              <label className=''>Università</label>
              <input type="text" required className={!authenticationError ? 'border rounded-lg px-2 py-1' : 'border border-red-600 rounded-lg px-2 py-1'} placeholder='Università'
                onChange={(e) => {
                  setUniversity(e.target.value);
                }} />
            </>
          )}

          <label className=''>Email</label>
          <input pattern='[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}' required className={!authenticationError ? 'border rounded-lg px-2 py-1 ' : 'border border-red-500 rounded-lg px-2 py-1 '} placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }} />
          <label className=''>Password</label>
          <input type="password" required className={!authenticationError ? 'border rounded-lg px-2 py-1' : 'border border-red-600 rounded-lg px-2 py-1'} placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }} />

          <button type="submit" className='broder rounded-full p-2 text-white bg-[#3092fa] hover:bg-[#2c86e7]'>Accedi</button>
        </form>

        {(authenticationError && props.registration) &&
          <span className='text-red-600'>Errore: prova con un altra email</span>
        }
        {(authenticationError && !props.registration) &&
          <span className='text-red-600'>Errore: credenziali errate</span>
        }

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Log