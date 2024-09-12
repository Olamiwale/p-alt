import React from "react";
import { logo } from "../data";

export default function Contact() {
  return (
    <div className="flex flex-col w-3/4 m-auto py-20 justify-center items-center">

      <p className="p-5 text-2xl font-semibold">Do you have any question? contact me</p>

      <div className="flex flex-col md:flex-row gap-5 "> 

        <div className="flex flex-col justify-center items-center w-full rounded-lg bg-gray-400 shadow-lg "> 
        <img className="w-full rounded-lg" src="./contact.png" />
        <div className=" flex space-x-5 p-5">
          {logo.map((item, id) => (
                <div key={item.id}>
                <img src={item.url} className="w-[30px] h-[30px]" />
              </div>
            ))}
        </div>
      </div>


     
      <form className="w-full px-10 pt-20 rounded-lg bg-gray-400 p-5 shadow-lg">
            <div className="flex gap-10 flex-col">
              <input className="p-3 rounded-full" placeholder="Name" />
              <input className="p-3 rounded-full" placeholder="Email" />
              <textarea
                rows={5}
                className="rounded-md p-3 "
                placeholder="Message"
              />
              <div className="w-full">
                <button className="bg-blue-600 p-3 w-full rounded-full uppercase font-semibold text-white">
                  send message
                </button>
              </div>
            </div>
          </form>

      </div>

      
    

    </div>
  );
}