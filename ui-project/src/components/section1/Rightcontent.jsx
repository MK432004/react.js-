import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard';
const Rightcontent = (props) => {
 
  return (
  <div className="h-full  flex-nowrap overflow-x-auto gap-4 w-3/4 p-2 flex">
    {props.users.map(function(elem){
      return <Rightcard img={elem.img}  tag={elem.tag}/>
 } )  }
      
    </div>
  )
}

export default Rightcontent
