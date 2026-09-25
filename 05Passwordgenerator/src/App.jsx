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
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
         <h1 className="text-white text-center"> password Gernetor </h1>
      <div className=' className=" flex shadow rounded-lg overflow-hidden mb-4" '>
        
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder=" Password"
        readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>

      </div>
        </div>
        
          
    </>
  )
}

export default App
