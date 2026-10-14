import React from 'react'
import Navbar from './Navbar';
import Page1context from './Page1context';

const Section1 = (props) => {
  
  return (
    <div className="h-screen w-full ">
        <Navbar/>
        <Page1context users={props.users} />
      
    </div>
  )
}

export default Section1
