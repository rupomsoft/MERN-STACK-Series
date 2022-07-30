const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    UserEmail:{type:String},
    CustomerID:{type:mongoose.Schema.Types.ObjectId},
    VatTax:{type:Number},
    Discount:{type:Number},
    OtherCost:{type:Number},
    ShippingCost:{type:Number},
    GrandTotal:{type:Number},
    Note:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const SalesModel=mongoose.model('sales',DataSchema);
module.exports=SalesModel