const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    UserEmail:{type:String},
    TypeID:{type:mongoose.Schema.Types.ObjectId},
    Amount:{type:Number},
    Note:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ExpensesModel=mongoose.model('expenses',DataSchema);
module.exports=ExpensesModel