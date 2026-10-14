import React from 'react'
import Leftcontent from './Leftcontent';
import Rightcontent from './Rightcontent';

const Page1context = (props) => {
  return (
    <div className=" py-10 flex h-[90vh] items-center  gap-10 px-18 ">
        
        <Leftcontent/>
        <Rightcontent users={props.users} />
      
    </div>
  )
}

export default Page1context
