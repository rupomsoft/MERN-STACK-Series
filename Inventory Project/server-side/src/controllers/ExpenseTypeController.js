const ExpenseTypeModel = require("../models/ExpenseTypeModel");

exports.CreateExpenseType=(req,res)=>{
    let reqBody=req.body;
    ExpenseTypeModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.ReadExpenseType=(req,res)=>{
    ExpenseTypeModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.UpdateExpenseType=(req,res)=>{
    let TypeID= req.params.TypeID;
    let Query={TypeID:TypeID};
    let reqBody=req.body;
    ExpenseTypeModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.DeleteExpenseType=(req,res)=>{
    let TypeID= req.params.TypeID;
    let Query={TypeID:TypeID};
    ExpenseTypeModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

