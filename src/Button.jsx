import React from 'react';
import { useEffect } from 'react';
const Button=({count,setCount})=>{
    const handleClick =()=>{
           
          setCount(count+1);
         };
         const handleClick1 =()=>{
            
           setCount(count-1);
          };
          useEffect(()=>{
            console.log("entered to usereffect");
            // return()=>{
            //   console.log("enter when component unmound");
              
            // }
            },[])
    return(
        <>
         <button onClick={handleClick}>Increment</button>
         <button onClick={handleClick1}>Decrement</button>
         <button onClick={()=>setCount(0)}>Reset</button>
         </>
       
    );
};

export default Button;

