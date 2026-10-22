import React from 'react'
import { useState } from 'react';

const App = () => {
  const [titel , setTitel]= useState(" ")


 function submithandeler(e){
    e.preventDefault()
    console.log("form submited " , titel)
    setTitel(" ")
  }




  return (
    <div>
        <form onSubmit={(e)=>{
        submithandeler(e)
      }}>
        <input type="text"
         placeholder= 'Enter the input'
         value={titel}
         onChange={(e)=>{
          setTitel(e.target.value)
         }}/>
        <button>submit</button>
      </form>
      
    </div>
  )
}

export default App

