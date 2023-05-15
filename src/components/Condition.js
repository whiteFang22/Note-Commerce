import React, { useContext } from 'react'
import Log from './Nav/Log';
import { StateContext } from './States';

function Condition({ children }) {
   const [state] = useContext(StateContext);
   return (
      <div>
         {!state.logged ?
            <Log />
            :
            <>
               {children}
            </>
         }
      </div>
   )
}

export default Condition