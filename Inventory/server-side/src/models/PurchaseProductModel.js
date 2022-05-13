const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    PurchaseID:{type:Number},
    ProductID:{type:Number},
    Qty:{type:String},
    Cost:{type:String},
    Total:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const PurchaseProductModel=mongoose.model('purchaseproducts',DataSchema);
module.exports=PurchaseProductModel