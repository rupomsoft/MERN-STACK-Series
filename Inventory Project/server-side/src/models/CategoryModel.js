const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    Name:{type:String,unique:true},
    CategoryID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const CategoryModel=mongoose.model('categories',DataSchema);
module.exports=CategoryModel