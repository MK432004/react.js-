import React from 'react'

const App = () => {
  return (
    <div className=" bg-black h-screen text-white ">
        <from className="flex gap-5 p-5 justify-between flex-col ">
            <input type="text" placeholder="Enter your heading"  className="border-2 rounded"></input>
            <input type="text" placeholder="Enter your details "
             className=" border-2 rounded h-66 g-5"></input>
             <button className="bg-white text-black rounded p-5">Add</button>
        </from>
        
      
    </div>
  )
}

export default App
