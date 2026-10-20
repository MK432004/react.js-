import { useState } from 'react'

import './App.css'

function App() {
  const [num , setNum] = useState({username:"manish kumar", age:23})
  const addvslu = () =>{
    const newNum = [num]
    

  console.log(num.username)
  }
  return (
    <>

    <h1>{num.username} {num.age}</h1>
     <button onDoubleClick={addvslu}> click</button>

    </>
  )
}

export default App
