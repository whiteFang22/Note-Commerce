import React, { createContext, useContext, useState } from "react";
import More from "./More";
import Studocu from "./Studocu";
import InputResearch from "./InputResearch";
import Accedi from "./Accedi";
import Registrati from "./Registrati";
import Dropdown from "./Dropdown/Dropdown";
import Sidebar from "../Sidebar/Sidebar";
import { StateContext } from "../States";

export const UserContext = createContext();

function Nav(props) {
   let navclass = `nav flex justify-between items-baseline p-1 bg-${props.nav_color} sticky top-0 z-20`;
   // styling navbar
   let rigth_nav
   let left_nav;
   if (props.input) {
      left_nav = "flex items-baseline w-full md:w-2/3"
      rigth_nav = `mr-12 hidden md:inline`;
   }
   else {
      left_nav = "flex items-baseline"
      rigth_nav = `mr-12 hidden sm:inline`;
   }

   // gets the global state
   const [state] = useContext(StateContext);
   const [sidebar, setSidebar] = useState(false);

   const toggleSidebar = () => {
      setSidebar(!sidebar);
      console.log(sidebar);
   }

   return (
      // <div className="nav flex justify-between items-baseline">
      <section className="sticky top-0 z-20">
      <div className={navclass}>

         <div className={left_nav}>
            <div className="ml-12 flex items-center mr-12">
               <More color={props.more_color} onClick={toggleSidebar}/>
               <Studocu />
            </div>
            {/* con questo conditional posso controllare quando visualizzare nella Nav l'input */}
            {props.input ? <InputResearch update={props.update} setUpdate={props.setUpdate} name={props.searchInput} placeholder="Cerca insegnamenti, libri o appunti"/> : ""}

         </div>

         {sidebar && (
            <Sidebar onClick={toggleSidebar}/>
         )}

         <div className={rigth_nav}>
            {!(state.logged) ?
               <>
                  <Accedi />
                  <Registrati />
               </>
               :
               <Dropdown />
            }
         </div>
      </div>
      {props.children}
      </section>
   );
}

export default Nav;