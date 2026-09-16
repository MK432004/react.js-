
import { useState } from 'react';

import './App.css'

function App() {
 let  counter = 15 
const advalue = () =>{
  console.log("clicked", counter)
  counter = counter + 1

}

  return (
    <>
    <h1>hllow react </h1>
    <h2>counter value : {counter} </h2>
    <button 
    onClick={advalue}>Add value</button>
    <br></br>
    <button>Remove value</button>
   
       
             
    </>
  )
}

export default App
