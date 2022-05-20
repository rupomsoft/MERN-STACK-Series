const UsersModel = require("../models/UsersModel");
let jwt = require('jsonwebtoken');

exports.CreateUser=(req,res)=>{
    let reqBody=req.body;
    UsersModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UpdateUser=(req,res)=>{
    let UserID= req.params.UserID;
    let Query={UserID:UserID};
    let reqBody=req.body;
    UsersModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.ReadUser=(req,res)=>{
    UsersModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.DeleteUser=(req,res)=>{
    let UserID= req.params.UserID;
    let Query={UserID:UserID};
    UsersModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.UserLogin=(req,res)=>{

    let UserName=req.body['UserName'];
    let Password=req.body['Password']


    UsersModel.find({UserName:UserName,Password:Password},(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            if(data.length>0){
                // Create Auth Token
                let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data[0]}
                let token = jwt.sign( Payload,'SecretKey123456789');
                res.status(200).json({status:"success",token:token,data:data[0]})
            }
            else {
                res.status(401).json({status:"unauthorized"})
            }
        }
    })
}