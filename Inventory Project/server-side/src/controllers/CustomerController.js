const CustomerModel = require("../models/CustomerModel");

exports.CreateCustomer=(req,res)=>{
    let reqBody=req.body;
    CustomerModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.ReadCustomer=(req,res)=>{
    CustomerModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.UpdateCustomer=(req,res)=>{
    let CustomerID= req.params.CustomerID;
    let Query={CustomerID:CustomerID};
    let reqBody=req.body;
    CustomerModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.DeleteCustomer=(req,res)=>{
    let CustomerID= req.params.CustomerID;
    let Query={CustomerID:CustomerID};
    CustomerModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}
