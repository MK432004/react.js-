import React from 'react'
import Leftcontent from './Leftcontent';
import Rightcontent from './Rightcontent';

const Page1context = () => {
  return (
    <div className="bg-amber-900 py-10 flex h-[90vh] items-center  gap-10 px-18 ">
        
        <Leftcontent/>
        <Rightcontent/>
      
    </div>
  )
}

export default Page1context
