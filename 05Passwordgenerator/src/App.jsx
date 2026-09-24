import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberalowed , setNumberalowed] = useState(false)
  const [characerallowed,setCharacterallowed] = useState(false)
  const [password, setPassword ] = useState("")

  const passwordGernetor = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmanopqrstuvwxyz"

    if(numberalowed){
      str += "0123456789"
    }
    if(characerallowed){
      str += "!&@#$*[]"
    }

    for(let i=1;  i<= array.length; i++){
       let char = Math.floor( Math.random() * str.length + 1)
       pass = str.charAt(char)

    }
    setPassword(pass)
  }, [length,numberalowed,characerallowed,setPassword])


  return (
    <>
      <h1 className= " text-4xl text-center text-white ">Password Generator</h1>
        
          
    </>
  )
}

export default App
