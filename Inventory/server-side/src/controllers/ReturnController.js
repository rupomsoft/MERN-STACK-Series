const ReturnModel = require("../models/ReturnModel");
const ReturnProductModel = require("../models/ReturnProductModel");

exports.CreateReturn=(req,res)=>{
    let reqBody=req.body;
    let Return={
        "CustomerID":reqBody['CustomerID'],
        "ReturnID":reqBody['ReturnID'],
        "ReturnCharges":reqBody['ReturnCharges'],
        "GrandTotal":reqBody['GrandTotal'],
        "Note":reqBody['Note']
    }

    let Products=reqBody['Products']
    ReturnModel.create(Return,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            ReturnProductModel.insertMany(Products,(err2,data2)=>{
                if(err){
                    res.status(400).json({status:"fail",data:err2})
                }
                else{
                    res.status(200).json({status:"success",data:data2})
                }
            })
        }
    })
}

exports.ReadReturn=(req,res)=>{
    ReturnModel.aggregate([
        {$lookup: {from: "customers", localField: "CustomerID", foreignField: "CustomerID", as: "customers"}}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.ReadReturnProducts=(req,res)=>{
    let ReturnID= req.params.ReturnID;
    let Query={ReturnID:parseInt(ReturnID)};
    ReturnProductModel.aggregate([
        {$match:Query},
        {$lookup: {from: "products",localField: "ProductID",foreignField: "ProductID",as: "products"}},
        {$unwind: "$products"},
        {$lookup: {from: "brands",localField: "products.BrandID",foreignField: "BrandID",as: "products.brands"}},
        {$lookup: {from: "categories",localField: "products.CategoryID",foreignField: "CategoryID",as: "products.categories"}},
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.DeleteReturn=(req,res)=>{
    let ReturnID= req.params.ReturnID;
    let Query={ReturnID:parseInt(ReturnID)};

    ReturnModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            ReturnProductModel.remove(Query,(err2,data2)=>{
                if(err){
                    res.status(400).json({status:"fail",data:err2})
                }
                else{
                    res.status(200).json({status:"success",data:data2})
                }
            })
        }
    })
}





