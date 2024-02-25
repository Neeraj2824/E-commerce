// const express= require('express');
// const app=express();
// app.get("/",(req,resp)=>
// {
//     resp.send("app is working..")

// });
// app.listen(5000)



// const express= require('express');
// const mongoose=require('mongoose');
// const app = express();
// const connectdb=async ()=>{
//      mongoose.connect('mongodb://127.0.0.1:27017/E-comm');
//      const productSchema=new mongoose.Schema({});
//      const product=mongoose.model('product',productSchema);
//      const data=await product.find();
//           console.warn(data)
//      }
//      connectdb();

// app.listen(5000)


const express=require("express");
require('./config');
const User=require('./User');
const app=express();
const cors=require('cors')
app.use(express.json());
app.use(cors());
const Product=require('./Product')
 
app.get('/hello',async(req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    resp.send(data);
});

app.post("/hello",async(req,resp)=>{
    let user=new User(req.body)
    let result= await user.save()
    resp.send(result)
}) 



app.post("/login",async (req,resp)=>{
let user = await User.findOne(req.body).select("-password");

if (user){
    resp.send(user)
}else{
    resp.send({result:'no user found'})
}

})

app.post("/addproducts",async(req,resp)=>{
    let product =new Product(req.body);
     let result=await product.save();
    resp.send(result)
})


app.get("/products",async(req,resp)=>{
    let product =await Product.find();
    resp.send(product) 
})



app.delete("/product/:id", async(req,resp)=>{
    const result=await Product.deleteOne({_id:req.params.id})
    resp.send(result)
})

app.put("/product/:id", async(req,resp)=>{
    const result=await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        })
    resp.send(result)
})
app.listen(4000)

