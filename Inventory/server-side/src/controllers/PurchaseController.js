const PurchaseModel = require("../models/PurchaseModel");
const PurchaseProductModel = require("../models/PurchaseProductModel");


exports.CreatePurchase=(req,res)=>{
    let reqBody=req.body;
    let Purchase={
        "SupplierID":reqBody['SupplierID'],
        "PurchaseID":reqBody['PurchaseID'],
        "VatTax":reqBody['VatTax'],
        "OtherCost":reqBody['OtherCost'],
        "Discount":reqBody['Discount'],
        "GrandTotal":reqBody['GrandTotal'],
        "Note":reqBody['Note']
    }
    let Products=reqBody['Products']

    PurchaseModel.create(Purchase,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            PurchaseProductModel.insertMany(Products,(err2,data2)=>{
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


exports.ReadPurchase=(req,res)=>{
    PurchaseModel.aggregate([
        {$lookup: {from: "suppliers", localField: "SupplierID", foreignField: "SupplierID", as: "Supplier"}}
    ],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}



exports.ReadPurchaseProducts=(req,res)=>{
    let PurchaseID= req.params.PurchaseID;
    let Query={PurchaseID:parseInt(PurchaseID)};

    PurchaseProductModel.aggregate([
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




exports.DeletePurchase=(req,res)=>{
    let PurchaseID= req.params.PurchaseID;
    let Query={PurchaseID:parseInt(PurchaseID)};

    PurchaseModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            PurchaseProductModel.remove(Query,(err2,data2)=>{
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
