import React from 'react'
import { useState } from 'react';

const App = () => {
  const   [notes ,setNotes] = useState(" ")
  const [details , setDetails] = useState(" ")
const submithandler = (e) =>{
 e.preventDefault() 
  console.log(notes , details)
}


  return (
    <div className=" bg-black h-screen lg:flex  text-white ">
        <form onSubmit={(e)=> {
          submithandler(e)
        }} className="flex gap-5 items-start  p-5   ">
           <div className="flex-col gap-5 lg: w items-start flex ">
             < input 
            
              type="text" placeholder="Enter your heading" 
             className="border-2 w-full outline-non p-3 rounded"
              value={notes}
             onChange={(e)=>{
             setNotes(e.target.value)
             } }
             />
            <textarea type="text" placeholder="Enter  your details "
             className=" border-2 w-full 1rounded outline-none p-4 h-66 g-5 " 
               value={details}
               onChange={(e)=>{
                setDetails(e.target.value)
               }}
              ></textarea>
             <button className="bg-white outline-none w-full text-black rounded p-5">Add</button></div>
        </form> 
        <div className="p-10 gap-2 flex flex-wrap bg-blue-950 lg:w-1/2 ">
        <h1 className="text-3xl">yor notes </h1>
        < div className="flex overflow-auto h-full gap-5 ">
        <div className=" h-40 w-32 rounded  bg-white"> </div>
        <div className=" h-40 w-32 rounded  bg-white"> </div>
        <div className=" h-40 w-32 rounded  bg-white"> </div>
        <div className=" h-40 w-32 rounded  bg-white"> </div>
        </div> 
      </div>
    </div>
  )
}

export default App
