import React from 'react'

const Navbar = () => {
  return (
    <div className=" flex py-4 px-8   bg-blue-900 justify-between ">
      <h1 className=" text-white text-xl  font-bold ">Manish Kumar</h1>
      <div className="  text-white flex gap-8 ">  
        <a  className=" text-lg font-bold " href="/">Home</a>
        <a className=" text-lg font-bold " href="/about">About</a>
        <a className=" text-lg font-bold " href="/contact">Contact</a>
        <a href="/corsee" className="text-lg font-bold ">Corsee</a>
        <a className="text-lg font-bold " href="/product">Product</a>
        <a className="text-lg font-bold " href="*">Notefound</a>
      </div>
    </div>
  )
}

export default Navbar
