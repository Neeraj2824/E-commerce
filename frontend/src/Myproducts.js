import React,{useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
const Myproducts=()=>{
const[products,setProducts]=useState([]);

 useEffect(()=>{
    getProducts();

  },[])


   const getProducts=async()=>{
   let result=await fetch('http://127.0.0.1:4000/products');
   result=await result.json();
   setProducts(result);
    }

 const deleteProduct=async(id)=>{
    let result=await fetch(`http://127.0.0.1:4000/product/${id}`,{
        method:"Delete"
    });
    result=await result.json();
    if(result)
    {
        getProducts();
    
    }
};
return(
        <div className="products">
          <h1>My products List</h1>
          <ul>
           <li>id</li>
           <li>Product name</li>
           <li>Brand</li>
           <li>Price</li>
           <li>Action</li>
           </ul>
         
{
    products.map((item,index)=>
    <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.pname}</li>
        <li>{item.pbrand}</li>
        <li>{item.pprice}</li>
        <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
        <Link to ={"/updateproduct/" + item._id}>update</Link></li>

        </ul>
    )
}
           </div> 


   )
}
export default Myproducts;