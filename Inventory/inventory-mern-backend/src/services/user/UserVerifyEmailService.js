const OTPSModel = require("../../models/OTPSModel");
const SendEmailUtility = require("../../utility/SendEmailUtility");


const UserVerifyEmailService= async (Request, DataModel) => {
    try {
        // Email Account Query
        let email = Request.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000)
        let UserCount = (await DataModel.aggregate([{$match: {email: email}}, {$count: "total"}]))
        if(UserCount.length>0){
            // OTP Insert
            await OTPSModel.create({email: email, otp: OTPCode})
            // Email Send
            let SendEmail = await SendEmailUtility(email,"Your PIN Code is= "+OTPCode,"Task Manager PIN Verification")
            return {status: "success", data: SendEmail}
        }
        else{
            return {status: "fail", data: "No User Found"}
        }
    }catch (e) {

        return  {status: "fail", data:e}
    }
}
module.exports=UserVerifyEmailService