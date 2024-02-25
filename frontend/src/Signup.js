
import React, { useState} from "react";
import {useNavigate} from 'react-router-dom'
const Signup = ()=>{        
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPass]=useState("");
    const navigate=useNavigate();

    const savedata=async()=>{
    console.warn(name,email,password)
    let result= await fetch("http://127.0.0.1:4000/hello",{
        method:'post',
        body: JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'},
    
    });
    result= await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/')
   }

    return(
        <center>
<div className="form1">

    <h1>Signup Here</h1>
          <label>Name</label>
          <input className="inputbox" type="textarea" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name'></input>
          <br></br>
          <label>Email</label>
          
          <input className="inputbox" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email'></input>
          <br></br>
          <label>Password</label>
          <input className="inputbox" type="text" value={password} onChange={(e)=>{setPass(e.target.value)}} placeholder='Enter your Passward'></input>
          <br></br>
          <button className="btn" onClick={savedata} type="button" >Signup</button>
       
        
        </div>
        </center>
    )
}
export default Signup;

