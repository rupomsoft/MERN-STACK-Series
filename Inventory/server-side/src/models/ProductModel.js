const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    CategoryID:{type:Number},
    BrandID:{type:Number},
    ProductID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    Name:{type:String},
    Price:{type:String},
    Unit:{type:String},
    Details:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const ProductModel=mongoose.model('products',DataSchema);
module.exports=ProductModel