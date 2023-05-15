import React from 'react'

function Filters() {
  return (
   <div className="mx-10 mt-6 filters flex flex-wrap flex-col lg:flex-row">
   <div className="basis-1/4 px-3">
      <label for="uni" className="text-sm font-thinh">Filtro scuola/università</label>
      <div>
         <input type="text" id="uni" className="border rounded-lg w-full p-2" placeholder="Cerca la tua università/scuola"/>
      </div>
   </div>

   <div className="basis-1/4 px-3">
      <label for="uni" className="text-sm font-thinh">Filtra per corso</label>
      <div>
      <input type="text" id="uni" className="border rounded-lg w-full p-2" placeholder="Cerca corso"/>
      </div>
   </div>

   
   <div className="basis-1/4 px-3">
      <label for="categoria" className="text-sm font-thinh">Filtra per categoria</label>
      <div>
         <select name="categoria" id="categoria" className="border rounded-lg w-full p-2">
            <option value="">Filtra per categoria</option>
            <option value="">Filtra per categoria</option>
            <option value="">Filtra per categoria</option>
         </select>
      </div>
   </div>

   <div className="basis-1/4 px-3">
      <label for="lingua" className="text-sm font-thinh">Filtra per lingua</label>
      <div>
         <select name="lingua" id="lingua" className="border rounded-lg w-full p-2">
            <option value="">Filtra per lingua</option>
            <option value="">Filtra per lingua</option>
            <option value="">Filtra per lingua</option>
         </select>
      </div>
   </div>
</div>
  )
}

export default Filters