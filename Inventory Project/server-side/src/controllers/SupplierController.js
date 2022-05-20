const SupplierModel = require("../models/SupplierModel");

exports.CreateSupplier=(req,res)=>{
    let reqBody=req.body;
    SupplierModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.ReadSupplier=(req,res)=>{
    SupplierModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.UpdateSupplier=(req,res)=>{
    let SupplierID= req.params.SupplierID;
    let Query={SupplierID:SupplierID};
    let reqBody=req.body;
    SupplierModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.DeleteSupplier=(req,res)=>{
    let SupplierID= req.params.SupplierID;
    let Query={SupplierID:SupplierID};
    SupplierModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

