//here we done all the uploads tha we use
import React from 'react'


import Name from './Name';
import Description from './Description';
import Image from './Image';
import Price from './Price';

//here is our component
function App() {
  const firstName = prompt("type your first name");
  return (
    <div>
    <div style={{
      border:'solid 1px lightgray',
      display:'flex',
      width:'80vw',
      overflow:'hidden',
      marginTop:'90px',
      height:'60vh',
      justifyContent:'center',
      alignItems:'center'}}>
    <Name/>
    <Image/>
    <Description/>
    <Price/>
    </div>
    <div style={{
      gap:'20px',
      width:'80vw',
      color:'white',
      paddingBottom:'30px',
      background:'black',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'}}>
    <p> Hello    <span style={{color:'red'}} >{(firstName || "  Anonymous")}</span > </p>
       <p> It looks like you {firstName ? "have" : "don't have"} a name</p>
       {!firstName && (
         <form>
           <p> Type your name here !!!</p>
           <input type="text" />
         </form>
       )}
    </div>
    </div>
  )
}

export default App