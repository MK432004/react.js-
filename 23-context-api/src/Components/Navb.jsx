import React, { useContext } from 'react'
import { Postdata } from './context/Themcontext'
const Navb = (props) => {
  const data = useContext(Postdata)
  consol.log(data)
  return (
    <div className="flex justify-between  font-bold bg-amber-400 p-5 ">
        <h1>Manish</h1>
        <div className=" flex gap-5 ">
         <h4>{data}</h4>
            <h2>Home</h2>
            <h2>about</h2>
            <h2>Contact</h2>
            <h4>{props.them}</h4>
     
        </div>
      
    </div>
  )
}

export default Navb
