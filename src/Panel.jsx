import React from 'react'
import { useState } from 'react'

const Panel = () => {
  const [color, setColor] = useState('olive')
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className=" flex justify-evenly text-white ">
        <button className='  bg-black p-3 rounded-lg' onClick={()=> setColor('black')}>Black </button>
        <button className=' bg-green-500 p-3 rounded-lg' onClick={()=> setColor('green')}>Green </button>
        <button className=' bg-blue-500 p-3 rounded-lg' onClick={()=> setColor('blue')}>Blue </button>
        <button className=' bg-red-500 p-3 rounded-lg' onClick={()=> setColor('red')}>red </button>
        <button className=' bg-pink-500 p-3 rounded-lg' onClick={()=> setColor('pink')}>Pink </button>
      </div>
    </div>
    </>
  ) 
}

export default Panel