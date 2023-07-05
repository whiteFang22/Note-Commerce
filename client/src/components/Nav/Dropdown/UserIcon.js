import React, {useContext} from 'react'
import { StateContext } from '../../States';

function UserIcon(props) {
   const [state] = useContext(StateContext);
   let user = state.user
   user = user.toUpperCase()
   const Style = `bg-pink-700 text-${props.text} text-white rounded-full w-${props.w} h-${props.h} z-20 relative`;
   return (
      <button onClick={props.onClick} className={Style}>
         <span>{user[0]}</span>
      </button>
   )
}

export default UserIcon