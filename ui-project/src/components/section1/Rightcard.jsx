import React from 'react'

const Rightcard = (props) => {
  return (
    <div className=" w-1/3 h-full  shrink-0 overflow-hidden relative rounded-3xl">
      <img  className=" h-full w-full  " src="{props.img}" />
    <div className=" absolute top-0 left-0   h-full w-full p-5  flex flex-col justify-between ">
     <h2 className="bg-white justify-center rounded-full h-10  text-2xl  flex font-bold  w-10 items-center  ">1</h2> 
     <div className="">
      <p className="text-lg text-white mb-10 leading-normal">May name is manish kumar , im grjuate in 2026 from rungta colage </p>
      <div className=" flex justify-between  ">
        <button className="bg-blue-700 text-white px-4 py-1 text-lg rounded-full">{props.tag}</button>
        <button className="bg-blue-600 text-white rounded-full px-2 py-1  "><i className="ri-arrow-right-line"></i></button>
      </div>
     </div>
    </div>
    </div>
  )
}
export default Rightcard
