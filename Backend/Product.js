
const mongoose= require('mongoose');
const productSchema=new mongoose.Schema({
    pid:String,
    pname:String,
    pbrand:String,
    pprice:String

});
module.exports=mongoose.model("products",productSchema);
