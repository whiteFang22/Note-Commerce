import React, { useState, useContext } from 'react'
import Element from './Element';
import { StateContext } from '../../States';
import UserIcon from './UserIcon';
import { DropdownData } from './ElementData';

function Dropdown(props) {
   const [visible, setVisible] = useState(false);
   const [state, setState] = useContext(StateContext);

   const resetState = {
      user: "",
      userId: "",
      logged: false,
      university: "",
      premium: false
   };

   const changeVisibility = () => {
      setVisible(!visible)
   }

   return (
      <>
         <UserIcon onClick={changeVisibility}  w="10" h="10" />
         {visible &&
            (
               <>
                  <div onClick={changeVisibility} className='overlay z-1 w-screen h-screen fixed bottom-0 left-0 right-0 top-0'></div>
                  <ul className='bg-white z-2 text-black mt-3 fixed right-3 rounded-3xl grid gap-y-4 min-w-[300px]'>
                     
                     {DropdownData.map((item, index) => {
                        return (
                           <>
                              {
                                 (index === 4) ? // Bottone per il logout
                                    <Element key={index} onClick={() => {setState(resetState)}} name={item.name} to={item.path} Style={item.Style} viewBox={item.viewBox} d={item.d} />
                                    :
                                    <Element key={index} name={item.name} to={item.path} Style={item.Style} viewBox={item.viewBox} d={item.d} />
                              }
                           </>
                        )
                     })}
                  </ul>
               </>

            )}
      </>
   )
}

export default Dropdown