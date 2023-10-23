import React from 'react'
import { product } from './Product'


function Price() {
  return (
    <div style={{backgroundColor:'red',height:'100%',display:'flex',alignItems:'center',padding:20,color:'wheat',fontSize:'24'}}>
        <h1>{product.price}$</h1>
    </div>
  )
}

export default Price