import { useState } from 'react'

import './App.css'

function App() {
  //const [num , setNum] = useState({username:"manish kumar", age:23})
//const [num , setNum] = useState([34,35,36,36,27])
const [num, setnum] = useState({username:"manish", age:89})

  const addvslu = () =>{

//     const newNum = {num}
//       newNum.username= "shanish kumar"
  
//  setNum(newNum)

// const newNum = [...num]
// newNum.push(89)

// setNum(newNum)

  setnum(prev=>({prev,username:"shanishkumar"}))


   }
  return (
    <>

    <h1>{num.username}</h1>

     <button onDoubleClick={addvslu}> click</button>

    </>
  )
}

export default App
