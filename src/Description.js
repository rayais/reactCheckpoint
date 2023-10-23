import React from 'react'
import { product } from './Product'
function Description() {
  return (
    <div style={{backgroundColor:'lightgray',height:'100%',display:'flex',alignItems:'center',padding:20}}>{product.description}</div>
  )
}

export default Description