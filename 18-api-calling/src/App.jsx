import axios, { Axios } from 'axios';
import React from 'react'
const App = () => {
  // async function getdata () {
  //  const response =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(response)
  // }

  // const getdata = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //  const data = await response.json()
  //   console.log(data)
  // }

  const getdata = async ()=>{
      const response =   await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response)
  }


  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      
    </div>
  )
}

export default App
