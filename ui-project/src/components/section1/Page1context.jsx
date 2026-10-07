import React from 'react'
import Leftcontent from './Leftcontent';
import Rightcontent from './Rightcontent';

const Page1context = () => {
  return (
    <div className="bg-amber-900 py-10 flex h-full   justify-between px-18 ">
        
        <Leftcontent/>
        <Rightcontent/>
      
    </div>
  )
}

export default Page1context
