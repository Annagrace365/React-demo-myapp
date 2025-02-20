import React from 'react';


const Decrement=({count,setCount})=>{
    console.log(count);
    return(
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        
    );
};

export default Decrement;