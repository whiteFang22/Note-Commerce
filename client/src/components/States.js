import React, { useState } from 'react'

// const initialState = {
//    logged: true,
// }
const initialState = {
   user: "",
   userId: "",
   logged: false,
   university: "",
   premium: false
};

export const StateContext = React.createContext();

function States({ children }) {
   const [state, setState] = useState(initialState)

   return (
      <StateContext.Provider value={[state, setState]}>
         {children}
      </StateContext.Provider>
   )
}

export default States