const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    CustomerName:{type:String},
    Phone:{type:String,unique:true},
    Email:{type:String},
    Address:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const CustomersModel=mongoose.model('customers',DataSchema);
module.exports=CustomersModel