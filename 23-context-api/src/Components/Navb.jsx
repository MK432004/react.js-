import { useContext } from "react";
import { Themdatacontext } from "../context/Themcontext";


const Navb = () => {
 
        const [them,setThem] = useContext(Themdatacontext)


  return (
    <div className="flex justify-between  font-bold bg-amber-400 p-5  ">
        <h1>Manish</h1>
        <div className=" flex gap-5 ">
         
            <h2>Home</h2>
            <h2>about</h2>
            <h2>Contact</h2>
            <h2>{them}</h2>
           
     
        </div>
      
    </div>
  )
}

export default Navb
