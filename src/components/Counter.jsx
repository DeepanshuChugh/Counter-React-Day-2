import React , { useState } from "react";

const Counter = ({initialValue})=>{
    const [count,setCount] = useState(initialValue) 
    
    return  (
        <>
        <h1>Counter: <span style = {{color : count%2===0?"green":"red"}}>{count}</span></h1>

        {/* <button onClick={Increment}>Increment</button> */}

        <button onClick={()=>{setCount(count+1);}}>Increment</button>

        <button onClick={()=>{
            if(count>0){setCount(count-1);}
        }}>Decrement</button>
        
        <button onClick={()=>{setCount(count*2);}}>Double</button>
        
        </>
    )
}
export default Counter;