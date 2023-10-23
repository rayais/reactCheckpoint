import React from 'react'
import { product } from './Product'
function Image() {
  return (
    <div style={{borderRadius:5,width:'50vw'}}>
        <img src={product.image} alt={product.name}/>
        
    </div>
  )
}

export default Image