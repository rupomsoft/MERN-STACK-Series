const ProductModel = require("../models/ProductModel");

exports.CreateProduct=(req,res)=>{
    let reqBody=req.body;
    ProductModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateProduct=(req,res)=>{
    let ProductID= req.params.ProductID;
    let Query={ProductID:ProductID};
    let reqBody=req.body;
    ProductModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.DeleteProduct=(req,res)=>{
    let ProductID= req.params.ProductID;
    let Query={ProductID:ProductID};
    ProductModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.ReadProduct=(req,res)=>{
    ProductModel.aggregate([
        {$lookup: {from: "categories", localField: "CategoryID", foreignField: "CategoryID", as: "Category"}},
        {$lookup: {from: "brands", localField: "BrandID", foreignField: "BrandID", as: "Brand"}}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}