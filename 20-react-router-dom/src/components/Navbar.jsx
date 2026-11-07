import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex gap-4 bg-amber-200 items-center justify-between p-10 ">
        <h1> Manish kumar </h1>
        <div className=" flex items-center gap-5 ">
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        </div>
        </div>

      
  )
}

export default Navbar
