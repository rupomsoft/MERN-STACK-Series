const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    SellID:{type:Number},
    ProductID:{type:Number},
    Qty:{type:String},
    Cost:{type:String},
    Total:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const SellProductModel=mongoose.model('sellproducts',DataSchema);
module.exports=SellProductModel