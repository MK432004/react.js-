
import './App.css'
import {useState} from 'React';

function App() {
  
//let a = 20 
let [number , setNumber] = useState(30)

function addvalue(){
  //console.log(a)
  //a=80
  //console.log(a)
   
  setNumber(number+1)
}
function removevalue(){
  setNumber(number-1)
}
function jum(){
  setNumber(number+5)
}
  return (
    <>
    <h1> {number}</h1>
    <button onClick={addvalue}>add value</button>
    <br></br>
    <button onClick={removevalue}>remove valie</button>
    <button onClick={jum}>increace 5</button>
    
    </>
  )
}

export default App
