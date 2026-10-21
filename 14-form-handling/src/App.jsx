import React from 'react'

const App = () => {
  function submithandeler(e){
    e.preventDefault()
    console.log("form submited ")
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandeler(e)
      }}>
        <input type="text" placeholder="inter your name"></input>
        <button>submit</button>
      </form>
      
    </div>
  )
}

export default App
