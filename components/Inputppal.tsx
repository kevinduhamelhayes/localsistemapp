import React from 'react'

const Inputppal = () => {
  return (

    <form className='flex flex-col items-center justify-center bg-slate-200 text-black p-10 rounded-lg'>
      <label htmlFor="producto" className="mb-2 text-lg font-bold justify-start items-start text-start w-full">Producto</label>
      <div className='flex gap-6'>
      <input 
        type="text" 
        id="producto" 
        autoFocus={true}
        className="px-4 py-4 w-[60vw] border rounded-md focus:outline-none focus:border-blue-500" 
        placeholder="Ingrese el nombre del producto" 
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Agregar
      </button>
      
      </div>

    </form>
  )
}

export default Inputppal