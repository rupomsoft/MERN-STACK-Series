const CategoryModel = require("../models/CategoryModel");


exports.CreateCategoryType=(req,res)=>{
    let reqBody=req.body;
    CategoryModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.ReadCategoryType=(req,res)=>{
    CategoryModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateCategoryType=(req,res)=>{
    let CategoryID= req.params.CategoryID;
    let Query={CategoryID:CategoryID};
    let reqBody=req.body;
    CategoryModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


exports.DeleteCategoryType=(req,res)=>{
    let CategoryID= req.params.CategoryID;
    let Query={CategoryID:CategoryID};
    CategoryModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}


