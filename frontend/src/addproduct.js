import React, { useState } from "react";

function Addproduct(){
    const[pid,setPID]=useState("");
    const[pname,setPname]=useState("");
    const[pbrand,setPbrand]=useState("");
    const[pprice,setPprice]=useState("");
    const adddata=async()=>{
        console.warn(pid,pname,pbrand,pprice)
        let result= await fetch("http://127.0.0.1:4000/addproducts",{
            method:'post',
            body: JSON.stringify({pid,pname,pbrand,pprice}),
            headers:{
                'Content-Type':'application/json'},
        
        });
        result= await result.json();
        console.warn(result);
    }
    return(
        <center>
        <div className="form2">
            <h1>Enter Product Details</h1>
        <label>Product Id</label>
        <input className="addproduct" type="textarea" value={pid} onChange={(e)=>{setPID(e.target.value)}} placeholder='Enter product id'></input>
        <br></br>
        <label>Product Name</label>
        <input className="addproduct" type="textarea" value={pname} onChange={(e)=>{setPname(e.target.value)}} placeholder='Enter Product name'></input>
        <br></br>
        <label>Brand</label>
        
        <input className="addproduct" type="text" value={pbrand} onChange={(e)=>{setPbrand(e.target.value)}} placeholder='Enter Brand Name'></input>
        <br></br>
        <label>Price</label>
        <input className="addproduct" type="text" value={pprice} onChange={(e)=>{setPprice(e.target.value)}} placeholder='Enter Product Price'></input>
        <br></br>
        <button className="btn" onClick={adddata} type="button" >Submit</button>
       
      
      </div>
      </center>
    )
}
export default Addproduct;