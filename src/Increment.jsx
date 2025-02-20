import React from 'react';


const Increment=({count,setCount})=>{
    console.log(count);
    return(
        <button onClick={()=>setCount(count+1)}>Increment</button>
        
    );
};

export default Increment;