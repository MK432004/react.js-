import { createContext, useState } from "react";


   export const Themdatacontext =createContext()
   
const Themcontext = (props) => {
   const [them, setThem] = useState("light")

  return (
    <div>
      <Themdatacontext.Provider value={[them,setThem]}>
      {props.children}
      </Themdatacontext.Provider>
         

    </div>
  )
}

export default Themcontext