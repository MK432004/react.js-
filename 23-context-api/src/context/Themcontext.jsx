import React, { createContext } from 'react'


   export const Postdata = createContext(Postdata)
const Themcontext = (props) => {

  return (
    <div>
      <Postdata.provider value="Manish">
        {props.children}
      </Postdata.provider>
    </div>
  )
}

export default Themcontext
