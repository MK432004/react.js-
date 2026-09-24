
import { useState } from 'react';

import './App.css'

function App() {

     let [counter ,setCounter]= useState(0)
 //let  counter = 15 
const advalue = () =>{
 //console.log("clicked", counter)
 // counter = counter + 1
 // setCounter(counter +1)
 setCounter(prevCounter => prevCounter +1)
 setCounter(prevCounter => prevCounter +1)
 setCounter(prevCounter => prevCounter +1)
 setCounter(prevCounter => prevCounter +1)
 setCounter(prevCounter => prevCounter +1)


}
const removevalue = ()=>{
  setCounter(counter-1)
}

  return (
    <>
    <h1>Counter App </h1>
    <h2>counter value : {counter} </h2>
    <button 
    onClick={advalue}>Add value {counter}</button>
    <br></br>
    <button onClick={removevalue}>Remove value {counter}</button>
   
       
             
    </>
  )
}

export default App
