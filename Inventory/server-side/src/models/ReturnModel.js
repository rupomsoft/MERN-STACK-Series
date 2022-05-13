const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    CustomerID:{type:Number},
    ReturnID:{type:Number},
    ReturnCharges:{type:String},
    GrandTotal:{type:String},
    Note:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ReturnModel=mongoose.model('returns',DataSchema);
module.exports=ReturnModel