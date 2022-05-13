const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    Name:{type:String,unique:true},
    TypeID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ExpenseTypeModel=mongoose.model('expensetypes',DataSchema);
module.exports=ExpenseTypeModel