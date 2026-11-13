import React, { useState } from 'react'
import Navb from "./Components/Navb"
const App = () => {

  const [them , setThem] = useState("them")

  return (
    <div className="">
     <Navb them={them} />
      
    </div>
  )
}

export default App

