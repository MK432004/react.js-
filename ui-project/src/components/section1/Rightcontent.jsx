import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard';
const Rightcontent = () => {
  return (
  <div className="h-full  flex-nowrap overflow-x-auto gap-4 w-3/4 p-2 flex">
      <Rightcard/>
      <Rightcard/>
      <Rightcard/>
      <Rightcard/>
      
    </div>
  )
}

export default Rightcontent
