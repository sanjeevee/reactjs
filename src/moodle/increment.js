import React,{useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
 function Add() {
    const[increment,setIncrement]=useState(0);

    return (
        <div>
        <h1>{increment}</h1>
        <button className="btn-primary" onClick={()=>setIncrement(increment+1)}>Increment</button>
        <button className="btn-warning" onClick={()=>setIncrement(increment-1)}>Decrement</button>
        <button  className="btn-danger"onClick={()=>setIncrement(0)}>Reset</button>
        </div>
    );
} 
export default Add;