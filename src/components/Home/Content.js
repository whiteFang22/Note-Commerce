import { Link } from "react-router-dom";

function Content(){
   return (
      <div className=" mt-40 mx-[20%]">
         <div className="content text-center">
            <p className="font-extrabold text-5xl whitespace-pre-line">
               <span>Per diventare più intelligenti </span>
               <span>insieme</span>
            </p>
            <p className="text-lg whitespace-pre-line mt-7">
               <span className='block'>Trova appunti di studio con le migliori </span>
               <span className='md:block'>recensioni da parte di studenti che seguono i </span>
               tuoi stessi corsi.
            </p>  
         </div>
         <div className="form bg-white p-4 mt-10 rounded-full border-2 border-transparent hover:border-blue-400">
            <form className="flex">
               <input type="text" className="outline-transparent ml-3 text-black w-full" placeholder="Cerca insegnamenti, libri o appunti"/>
               <Link to="/search" type="submit" className="mr-3 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 stroke-black fill-black">
                     <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg> 
               </Link>
            </form>
         </div>
      </div>
   );
}

export default Content;