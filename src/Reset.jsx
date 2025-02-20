import React from 'react';


const Reset=({count,setCount})=>{
    console.log(count);
    return(
        <button onClick={()=>setCount(0)}>Reset</button>
        
    );
};

export default Reset;