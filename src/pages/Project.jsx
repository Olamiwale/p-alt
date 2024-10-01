import React from 'react'
import { projectData } from '../data'

export default function Project() {
  return (
    <div className='flex justify-center mt-40'>
      <div className='w-3/4'>
        <p className='font-bold text-3xl pb-5 flex justify-center'>Project</p>

        <div className='flex flex-wrap gap-5 justify-center items-center p-5'>


          
             {projectData.map((item, id)=>(
            <div className='flex flex-col items-center' key={item.id}>
            <img src={item.img} className='w-[250px] h-[200px] shadow-lg shadow-slate-800' alt={item.name} /> 
            <p className='py-2 font-semibold'>{item.name}</p> 
            </div>
          ))}
          

         
        </div>
      </div>
    </div>
  )
}
