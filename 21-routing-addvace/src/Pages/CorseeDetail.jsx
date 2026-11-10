import React from 'react'
import { useParams } from 'react-router-dom';

const CorseeDetail = () => {
    const parms= useParams()

  return (
    <div>
        <h1> {parms.id}Corsee Detail</h1>
      
    </div>
  )
}

export default CorseeDetail
