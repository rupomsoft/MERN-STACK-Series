const ExpenseListModel = require("../models/ExpenseListModel");

exports.CreateExpenseList=(req,res)=>{
    let reqBody=req.body;
    ExpenseListModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateExpenseList=(req,res)=>{
    let ExpenseID= req.params.ExpenseID;
    let Query={ExpenseID:ExpenseID};
    let reqBody=req.body;
    ExpenseListModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.DeleteExpenseList=(req,res)=>{
    let ExpenseID= req.params.ExpenseID;
    let Query={ExpenseID:ExpenseID};
    ExpenseListModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.ReadExpenseList=(req,res)=>{
    ExpenseListModel.aggregate([{$lookup: {from: "expensetypes", localField: "TypeID", foreignField: "TypeID", as: "Type"}}],(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}