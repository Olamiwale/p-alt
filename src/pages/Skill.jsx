import React from 'react'
import  {skillLogo}  from '../data'



export default function Skill() {


  console.log(skillLogo)
  return (
    <div className='flex justify-center mt-40'>
      <div className='w-3/4'>
      <div className='flex flex-col items-center'>       
        <p className='font-bold text-3xl pb-5'>Skills</p>
        <p className='font-semibold text-xl pb-10'>Technical Expertise & Core Skills</p>
         </div>

        <div className='mt-5 grid grid-cols-4 md:grid-cols-5'>
          {skillLogo.map((item, id)=>(
            <div className='flex flex-col items-center justify-center p-5' key={item.id}>
            <img src={item.url} className='w-3/5 md:1/7' alt={item.name} /> 
            <p className='py-2 font-semibold'>{item.name}</p> 
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
