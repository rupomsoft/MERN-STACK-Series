const UsersModel = require("../models/UsersModel");
const OTPSModel = require("../models/OTPSModel");
const SendEmailUtility = require("../utility/SendEmailUtility");
const CreateToken = require("../utility/CreateToken");


exports.Registration=async (req, res) => {
    try{
        let data= await UsersModel.create(req.body)
        res.status(200).json({status: "success", data: data})
    }
    catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}



exports.Login=async(req,res)=>{
    try {
        let data =await UsersModel.aggregate([{$match:req.body}, {$project:{_id:0,email:1,firstName:1,lastName:1,mobile:1,photo:1}}])
        if(data.length>0){
          let token = await CreateToken(data[0]['email'])
          res.status(200).json({status:"success",token:token,data:data[0]})
        }
        else {
            res.status(401).json({status:"unauthorized"})
        }
  }
  catch (e) {
      res.status(200).json({status: "fail", data: e})
  }
}



exports.ProfileUpdate=async (req, res) => {
    try {
        let data = await UsersModel.updateOne({email: req.headers['email']}, req.body)
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}



exports.ProfileDetails=async (req, res) => {
    try {
        let data = await UsersModel.aggregate([{$match: {email: req.headers['email']}}])
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}



exports.RecoverVerifyEmail=async (req,res)=>{
    try {
        // Email Account Query
        let email = req.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000)

        let UserCount = (await UsersModel.aggregate([{$match: {email: email}}, {$count: "total"}]))

        if(UserCount.length>0){
            // OTP Insert
            await OTPSModel.create({email: email, otp: OTPCode})
            // Email Send
            let SendEmail = await SendEmailUtility(email,"Your PIN Code is= "+OTPCode,"Task Manager PIN Verification")
            res.status(200).json({status: "success", data: SendEmail})
        }
        else{
            res.status(200).json({status: "fail", data: "No User Found"})
        }
    }catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}


exports.RecoverVerifyOTP=async (req,res)=>{
    try {

        let email = req.params.email;
        let OTPCode = req.params.otp;
        let status=0;
        let statusUpdate=1;

        let OTPCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: status}}, {$count: "total"}])

        if (OTPCount.length>0) {
            let OTPUpdate = await OTPModel.updateOne({email: email, otp: OTPCode, status: status}, {email: email, otp: OTPCode, status: statusUpdate})
            res.status(200).json({status: "success", data: OTPUpdate})
        } else {
            res.status(200).json({status: "fail", data: "Invalid OTP Code"})
        }
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}


exports.RecoverResetPass=async (req,res)=>{

    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;

    try {
        let OTPUsedCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: statusUpdate}}, {$count: "total"}])
        if (OTPUsedCount.length>0) {
            let PassUpdate = await UsersModel.updateOne({email: email}, {password: NewPass})
            res.status(200).json({status: "success", data: PassUpdate})
        } else {
            res.status(200).json({status: "fail", data: "Invalid Request"})
        }
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}














