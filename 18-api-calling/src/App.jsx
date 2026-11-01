import axios, { Axios } from 'axios';
import React, { useState } from 'react'
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

  // const getdata = async ()=>{
  //     const {data}=   await axios.get('https://jsonplaceholder.typicode.com/posts')
      
  //    // console.log(response.data)
  //    console.log(data)
  // }
    
    const [data, setData ]  = useState([])

    const getdata = async ()=>{
      const response  =   await axios.get("https://picsum.photos/v2/list")
      
      
     setData(response.data)
    
  }


  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      <div>{data.map(function(elem, idx){
         return <h1> hello{elem.author} {idx}</h1>
       })}</div>
      
    </div>
  )
}

export default App
