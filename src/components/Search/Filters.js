import React from 'react'

function Filters() {
  return (
   <div class="mx-10 mt-6 filters flex flex-wrap flex-col lg:flex-row">
   <div class="basis-1/4 px-3">
      <label for="uni" class="text-sm font-thinh">Filtro scuola/università</label>
      <div>
         <input type="text" id="uni" class="border rounded-lg w-full p-2" placeholder="Cerca la tua università/scuola"/>
      </div>
   </div>

   <div class="basis-1/4 px-3">
      <label for="uni" class="text-sm font-thinh">Filtra per corso</label>
      <div>
      <input type="text" id="uni" class="border rounded-lg w-full p-2" placeholder="Cerca corso"/>
      </div>
   </div>

   
   <div class="basis-1/4 px-3">
      <label for="categoria" class="text-sm font-thinh">Filtra per categoria</label>
      <div>
         <select name="categoria" id="categoria" class="border rounded-lg w-full p-2">
            <option value="">Filtra per categoria</option>
            <option value="">Filtra per categoria</option>
            <option value="">Filtra per categoria</option>
         </select>
      </div>
   </div>

   <div class="basis-1/4 px-3">
      <label for="lingua" class="text-sm font-thinh">Filtra per lingua</label>
      <div>
         <select name="lingua" id="lingua" class="border rounded-lg w-full p-2">
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