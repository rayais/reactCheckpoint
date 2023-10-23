import React from 'react'
import { product } from './Product'
function Name() {
  return (
    <div style={{backgroundColor:'lightgray',height:'100%',display:'flex',alignItems:'center',padding:20}}>
        <h2>{product.name}</h2>
    </div>
  )
}

export default Name