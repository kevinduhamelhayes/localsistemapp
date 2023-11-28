
import React from 'react'
import Inputppal from './Inputppal'

const Body = () => {
  return (
    <div className='w-[100vw] h-[69vh]  bg-slate-200  text-black '>
      <div className='flex flex-row items-start max-w-[1300px] '>
        <div>
        <Inputppal /> 
        </div>
        <div className='bg-black flex justify-center items-center m-12 rounded-2xl'>
          <h1 className='text-green-500 font-bold capitalize py-6 px-4 text-6xl'>$19.220,10</h1>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Body