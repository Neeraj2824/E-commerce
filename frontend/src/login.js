import React,{useEffect, useState}from "react";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const[email,setEmail]=useState("");
    const[password,setPass]=useState("");
    const navigate=useNavigate()
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/login')
        }

    },[])
     const logged=async()=>{
        console.warn(email,password)
        let result= await fetch("http://127.0.0.1:3000/login",{
        method:'post',
        body: JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'},
    });
    result= await result.json();
    console.warn(result);
    if (result.name){
        localStorage.setItem("user",JSON.stringify(result))
         navigate("/")
    }
    
    else{
        alert("please enter correct detail")
    }}
    return(
        <center>
<div className="form1">

          <h1>Login here</h1>
          <label>Email</label>
          
          <input className="inputbox" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email'></input>
          <br></br>
          <label>Password</label>
          <input className="inputbox"  value={password} onChange={(e)=>{setPass(e.target.value)}} placeholder='Enter your Passward'></input>
          <br></br>
          <button className="btn" onClick={logged} type="button" >Login</button>
        
        
        </div>
        </center>
    )
}
export default Login;

