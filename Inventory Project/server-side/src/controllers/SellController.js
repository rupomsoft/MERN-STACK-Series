const SellModel = require("../models/SellModel");
const SellProductModel = require("../models/SellProductModel");


exports.CreateSell=(req,res)=>{
    let reqBody=req.body;
    let Sell={
        "CustomerID":reqBody['CustomerID'],
        "SellID":reqBody['SellID'],
        "VatTax":reqBody['VatTax'],
        "OtherCost":reqBody['OtherCost'],
        "Discount":reqBody['Discount'],
        "GrandTotal":reqBody['GrandTotal'],
        "Note":reqBody['Note']
    }

    let Products=reqBody['Products']
    SellModel.create(Sell,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            SellProductModel.insertMany(Products,(err2,data2)=>{
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


exports.ReadSell=(req,res)=>{
    SellModel.aggregate([
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




exports.ReadSellProducts=(req,res)=>{
    let SellID= req.params.SellID;
    let Query={SellID:parseInt(SellID)};
    SellProductModel.aggregate([
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


exports.DeleteSell=(req,res)=>{
    let SellID= req.params.SellID;
    let Query={SellID:parseInt(SellID)};

    SellModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            SellProductModel.remove(Query,(err2,data2)=>{
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

