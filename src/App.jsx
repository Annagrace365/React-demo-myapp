// // import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Increment from './Increment';
// import Decrement from './Decrement';
// import Reset from './Reset';
// import Button from './Button';

// // function App() {
// //   const[count,setCount]=useState(0)
// //   // const handleClick =()=>{
// //   //   console.log("Button Clicked");
// //   //   setCount(count+1);
// //   // };
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         HELLO WORLD
// //         <h1>{count}</h1>
// //          <Button count={count} setCount={setCount}/> 
// //          {/* <button onClick={()=>setCount(count+1)}>Increment</button>  or*/}
// //          {/* <button onClick={handleClick}>Increment</button> */}
// //          <Increment count={count} setCount={setCount}/>
// //          {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
// //          <Decrement count={count} setCount={setCount}/>
// //          {/* <button onClick={()=>setCount(0)}>Reset</button> */}
// //          <Reset count={count} setCount={setCount}/>
// //          <button onClick={()=>setCount(10)}>Reset To 10</button>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;



// //conditional rentenring

// function App() {
//   const[count,setCount]=useState(0)
//   const[showButton,setShowButton]=useState(false)
    
//   return (
//     <>
//     <div className="App">
//       <header className="App-header">
//         HELLO WORLD
//         <h1>{count}</h1>
//          <button onClick={()=>setShowButton(true)}>Click to show</button>
//          <button onClick={()=>setShowButton(false)}>Click to hide</button>
//          {showButton && <Button count={count} setCount={setCount}/>}
//       </header>
//     </div>
//     </>
//   );
// }

// export default App;


//day 2
import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
 
function App() {
  const[count,setCount]=useState(1);
  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(true);
 
  // useEffect(()=>{
  //   setLoading(true);
  //   fetch(https://fakestoreapi.com/products/${count})
  //   .then((res)=>res.json())
  //   .then((json)=>{
  //     setLoading(false);
  //     setData(json);
  //   });
  //   },[count]);
  useEffect(()=>{
    setLoading(true);
    const fetchData=async()=>{
      const apiData=await fetch(`https://fakestoreapi.com/products/${count}`);
      const jsonData=await apiData.json();
      setData(jsonData);
      setLoading(false);
    };
    fetchData();
 
    },[count]);
    console.log(data,"data===");
 
  return (
 
    <div className="App">
      <header className="App-header">
 
        {/* {data?.map((product,index)=>(
          <div key={index}>
          <h4 >{product.title}</h4>
          <img  src={product.image} style={{width:"200px"}}/>
          </div>
        ))} */}
        <h1>{count}</h1>
        {loading?(
          <h4>Loading...</h4>
        ):(
          <>
          <h4 >{data.title}</h4>
          <img  src={data.image} style={{width:"200px"} }/>
          </>
        )
        }
        <button onClick={()=>setCount(count+1)}>Click</button>
      </header>
    </div>
  );
}
 
export default App;