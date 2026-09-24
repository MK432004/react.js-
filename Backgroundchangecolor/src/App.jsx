import {useState} from "react"

function App() {
  const [color, setColor] = useState("")

  const changecolor= (newcolor)=>{
    setColor(newcolor)
    

  }
 
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 border bg-black ">
      <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 gap-3 rounded-3xl border">
        <button
          onClick={() => changecolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red </button>

          <button
          onClick={() => changecolor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => changecolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={() => changecolor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>

          <button
          onClick={() => changecolor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button
          onClick={() => changecolor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>



          </div>
         
          
    </div>

    </div>

    </>
  ) 
}

export default App
