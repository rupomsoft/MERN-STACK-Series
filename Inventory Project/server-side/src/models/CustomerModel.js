const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    CustomerName:{type:String},
    CustomerID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    Phone:{type:String},
    Email:{type:String},
    Address:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const CustomerModel=mongoose.model('customers',DataSchema);
module.exports=CustomerModel