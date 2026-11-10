import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
   let nevigate = useNavigate()

    
     
  return (
    <div className="bg-amber-300 gap-5 flex  px-5 py-2  ">
      <button onClick={()=>{
        nevigate("/")
      }} className="bg-green-400 rounded p-5 ">Reuturn Home Page </button>

    
      <button onClick={()=>{
        nevigate(-1)
      }} className="bg-amber-800 rounded p-4  " > Back </button>

      <button onClick={()=>{
        nevigate(+1)
      }} className="bg-blue-900 rounded p-6 ">Next</button>
    </div>
  )
}

export default Navbar2
