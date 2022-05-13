const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    Name:{type:String,unique:true},
    BrandID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const BrandModel=mongoose.model('brands',DataSchema);
module.exports=BrandModel