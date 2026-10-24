import React from 'react'

const App = () => {
const submithandler = (e) =>{
 e.preventDefault() 
  console.log("from submited")
}


  return (
    <div className=" bg-black h-screen text-white ">
        <form onSubmit={(e)=> {
          submithandler(e)
        }} className="flex gap-5 p-5 justify-between flex-col ">
            <input type="text" placeholder="Enter your heading"  className="border-2 outline-non p-3 rounded"></input>
            <textarea type="text" placeholder="Enter your details "
             className=" border-2 rounded outline-none p-4 h-66 g-5 " ></textarea>
             <button className="bg-white outline-none  text-black rounded p-5">Add</button>
        </form>
        
      
    </div>
  )
}

export default App
