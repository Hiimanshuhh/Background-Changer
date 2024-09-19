import React from 'react'

const Panel = () => {
  return (
    <>
    <div className='hi'>
      <div className=" flex justify-evenly text-white ">
        <button className=' bg-slate-500 p-3 rounded-lg' onClick={changColor(white)}>white </button>
        <button>Green </button>
        <button>Blue </button>
        <button>Brown </button>
        <button>Pink </button>
      </div>
    </div>
    </>
  )
}

export default Panel