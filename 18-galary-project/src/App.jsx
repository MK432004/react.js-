import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
 const [data , setData] = useState([])


const getdata = async ()=>{
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=15")
  setData(response.data)
  console.log(response.data)
}
let printuserdata = " not avale data"

if(data.length>0){
  printuserdata = data.map(function(elem, idx){
    return <div> 
      <img  className=" h-40 "src={elem.download_url} ></img>
  
    </div>
  })

}

  return (
    <div className="text-white overflow-hidden h-screen bg-black">
      <button onClick={getdata} 
      className=" bg-green   ">click</button>
      <div className=" flex flex-wrap gap-2 ">{printuserdata}</div>
    </div>
  )
}

export default App
