const UserVerifyOtpService= async (Request, DataModel) => {
    try {
        let email = Request.params.email;
        let OTPCode = Request.params.otp;
        let status=0;
        let statusUpdate=1;

        let OTPCount = await DataModel.aggregate([{$match: {email: email, otp: OTPCode, status: status}}, {$count: "total"}])

        if (OTPCount.length>0) {

            let OTPUpdate = await DataModel.updateOne({email: email, otp: OTPCode, status: status}, {email: email, otp: OTPCode, status: statusUpdate})
            return {status: "success", data: OTPUpdate}

        } else {

             return  {status: "fail", data: "Invalid OTP Code"}
        }
    }
    catch (e) {

        return {status: "fail", data:e}
    }
}
module.exports=UserVerifyOtpService