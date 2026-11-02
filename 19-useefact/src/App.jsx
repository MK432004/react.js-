import React, { useEffect, useState } from 'react'

const App = () => {

 const [num ,setNum] = useState(0)
 const [num2, setNum2] = useState(0)


function achanging(){
  console.log("a is changing")
  
}

function bchanging(){
  console.log("b is changing ")
 
}

 useEffect(function(){
  bchanging()
  achanging()
 
 } , [num2, num])

  return (
    <div>
      <h1> {num}</h1>
      <h1>{num2}</h1>
      <button onClick={()=>{
        setNum(num +1 )
      }}>clicl a</button>
      <br></br>

     
      <button onClick={()=>{
        setNum2(num2 + 1)
      }}>click b</button>
    </div>
  )
}

export default App


