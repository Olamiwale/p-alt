import React from 'react'



export default function About() {
  return (
    <div className=" mb-10 flex flex-col max-w-[1200px] m-auto md:px-20 md:flex-row justify-between items-center md:gap-20">

     
      
          <div className=' md:w-full w-3/4'> 
           <p className="font-bold text-3xl">About</p>
           <p className="py-4 font-semibold text-xl">Who I Am?</p>

          <p className="tracking-wider mt-10">
            I'm a frontend developer, currently expanding my skills to include
            backend development. I specialize in crafting engaging user
            experiences using technologies such as React.js, Next.js, Vue.js,
            HTML5, CSS3, and TailwindCSS. Additionally, I have proficiency in
            backend technologies like Node.js and Solidity. Throughout my
            career, I've completed a diverse range of projects spanning both
            web2 and web3 industries. My primary focus is on client
            satisfaction, and I take pride in delivering high-quality solutions
            tailored to their specific needs..
          </p>
        
           
          <div className='flex justify-center mt-10'> 
             <button className="bg-blue-700 p-5 rounded-md text-white uppercase mt-5">
           Check out some of my latest projects
          </button>
          </div>
          </div>

         
        

          <div className="mt-20 flex justify-center">
          <img
            src='../aboutImg.png'
            alt="About-Image"
            className="rounded-full md:w-full  py-4 w-2/4  h-2/3"
          />
        </div>
      
    </div>
  )
}
