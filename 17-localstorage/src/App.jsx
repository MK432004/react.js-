import { useState } from 'react'



function App() {
 
//  localStorage.setItem("user", "manish")
//  const  user = localStorage.getItem("user")
//  console.log(user)
const user = {
  Nmae:"Manish ",
  age: 22,
  city: " Aurangabad"
}

localStorage.setItem("user", JSON.stringify(user))

  return (
    <>
     <div>app</div>
    </>
  )
}

export default App
