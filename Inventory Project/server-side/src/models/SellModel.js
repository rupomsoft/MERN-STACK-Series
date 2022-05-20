const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    CustomerID:{type:Number},
    SellID:{type:Number},
    VatTax:{type:String},
    OtherCost:{type:String},
    Discount:{type:String},
    GrandTotal:{type:String},
    Note:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const SellModel=mongoose.model('sells',DataSchema);
module.exports=SellModel