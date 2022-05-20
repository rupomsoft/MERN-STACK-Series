const BrandModel = require("../models/BrandModel");

exports.CreateBrandType=(req,res)=>{
    let reqBody=req.body;
    BrandModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.ReadBrandType=(req,res)=>{
    BrandModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateBrandType=(req,res)=>{
    let BrandID= req.params.BrandID;
    let Query={BrandID:BrandID};
    let reqBody=req.body;
    BrandModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.DeleteBrandType=(req,res)=>{
    let BrandID= req.params.BrandID;
    let Query={BrandID:BrandID};
    BrandModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}