const mongoose=require('mongoose');
const DataSchema=mongoose.Schema(
    {
    ProductName:{type:String},
    ProductCode:{type:String},
    Img:{type:String},
    UnitPrice:{type:String},
    Qty:{type:String},
    TotalPrice:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
    },
    {versionKey:false}
);

const ProductsModel=mongoose.model('products',DataSchema);
module.exports=ProductsModel;