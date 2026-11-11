import React, { useState } from 'react'

const Navbar = () => {
   const  [them , setThem] = useState()

   console.log("butonclicked")

  return (
    <div>
        <button onClick={()=>{
         setThem()
        }}> change </button>
      
    </div>
  )
}

export default Navbar
