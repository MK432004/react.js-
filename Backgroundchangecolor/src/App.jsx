import {useState} from "react"

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
    <div className="fiexd-flex flex-wrap justify-center bottom-12 inset-x-0 px-2 border bg-black ">
      <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl border">
        <button className="outline-none px-4" 
        style={{backgroundColor:"red "}}>Red</button></div>
    </div>

    </div>

    </>
  )
}

export default App
