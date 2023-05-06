import React, { createContext, useContext } from "react";
import More from "./More";
import Studocu from "./Studocu";
import InputResearch from "./InputResearch";
import Accedi from "./Accedi";
import Registrati from "./Registrati";
import Dropdown from "./Dropdown/Dropdown";
import { StateContext } from "../States";

export const UserContext = createContext();

function Nav(props) {
   let navclass = `nav flex justify-between items-baseline p-1 bg-${props.nav_color} sticky top-0`;
   // styling navbar
   let rigth_nav
   let left_nav;
   if (props.input) {
      left_nav = "flex items-baseline w-full lg:w-2/3"
      rigth_nav = `mr-12 hidden lg:inline`;
   }
   else {
      left_nav = "flex items-baseline"
      rigth_nav = `mr-12 hidden sm:inline`;
   }

   // gets the global state
   const [state] = useContext(StateContext);

   return (
      // <div className="nav flex justify-between items-baseline">
      <div className={navclass}>
         <div class={left_nav}>
            <div class="ml-12 flex items-center mr-12">
               <More color={props.more_color} />
               <Studocu />
            </div>
            {/* con questo conditional posso controllare quando visualizzare nella Nav l'input */}
            {props.input ? <InputResearch placeholder="Cerca insegnamenti, libri o appunti"/> : ""}

         </div>

         <div className={rigth_nav}>
            {!(state) ?
               <>
                  <Accedi />
                  <Registrati />
               </>
               :
               <Dropdown />
            }
         </div>

      </div>
   );
}

export default Nav;