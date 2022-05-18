const SellModel = require("../models/SellModel");
const PurchaseModel = require("../models/PurchaseModel");
const ExpenseListModel = require("../models/ExpenseListModel");
const ReturnModel = require("../models/ReturnModel");

exports.TotalSell=(req,res)=>{
    SellModel.aggregate([{$group:{_id:0,sum:{$sum:{$toDouble:"$GrandTotal"}}}}],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.TotalPurchase=(req,res)=>{
    PurchaseModel.aggregate([{$group:{_id:0,sum:{$sum:{$toDouble:"$GrandTotal"}}}}],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.TotalExpense=(req,res)=>{
    ExpenseListModel.aggregate([{$group:{_id:0,sum:{$sum:{$toDouble:"$Amount"}}}}],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.TotalReturn=(req,res)=>{
    ReturnModel.aggregate([{$group:{_id:0,sum:{$sum:{$toDouble:"$GrandTotal"}}}}],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}