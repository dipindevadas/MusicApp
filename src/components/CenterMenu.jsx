import React from 'react'

function CenterMenu() {

    const listyle="mr-[3rem] hover: cursor-pointer  " 
  return (
   <div className="menu flex">
    <ul className='flex w-[100%] justify-between'>
        <li  className={listyle}>Home</li>
        <li className={listyle}>About</li>
        <li className={listyle}>Performer</li>
        <li className={listyle}>Event Shedule</li>
    </ul>
   </div>
  )
}

export default CenterMenu