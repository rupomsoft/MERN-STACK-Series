const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    TypeID:{type:Number},
    ExpenseID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    Amount:{type:Number},
    Note:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ExpenseListModel=mongoose.model('expenselists',DataSchema);
module.exports=ExpenseListModel