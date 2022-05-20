const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    ReturnID:{type:Number},
    ProductID:{type:Number},
    Qty:{type:String},
    Cost:{type:String},
    Total:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ReturnProductModel=mongoose.model('returnproducts',DataSchema);
module.exports=ReturnProductModel