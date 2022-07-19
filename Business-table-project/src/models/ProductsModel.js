const mongoose=require('mongoose');
const DataSchema=mongoose.Schema(
    {
        id:{type:Number},
        title:{type:String},
        price:{type:String},
        special_price:{type:String},
        image:{type:String},
        category:{type:String},
        subcategory:{type:String},
        remark:{type:String},
        brand:{type:String},
        shop:{type:String},
        shop_name:{type:String},
        star:{type:String},
        product_code:{type:String},
        stock:{type:String}
    },
    {versionKey:false}
);
const ProductsModel=mongoose.model('products',DataSchema);
module.exports=ProductsModel;