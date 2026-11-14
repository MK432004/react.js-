import React, { useContext } from 'react'
import { Themdatacontext } from '../context/Themcontext';

const Buton = () => {
     const [them,setThem] = useContext(Themdatacontext)
    const Changethem = ()=>{
        setThem("Dark")
       


    } 

  return (
    <div> 
        <button  className=" bg-amber-900 "
        onClick={Changethem}>Changethem </button>
      
    </div>
  )
}

export default Buton
