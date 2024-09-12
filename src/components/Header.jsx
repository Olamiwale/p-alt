import React from 'react'

export default function Header() {
  return (
    <div className='sticky z-50 top-0 border-b-2 shadow-lg bg-white'>

  
    <div className='md:p-8 p-4 md:max-w-[1200px] flex m-auto justify-between'>
        <div className='uppercase font-semibold'>Logo</div>

      <ul className='flex justify-evenly font-semibold space-x-5 md:space-x-20'>
        <li>Home</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Projects</li>
      </ul>
    </div>  
    </div>
  )
}



