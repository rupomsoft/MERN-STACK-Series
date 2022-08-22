const PurchasesModel = require("../../models/Purchases/PurchasesModel");
const PurchasesReportService= async (Request) => {
    try{
        let UserEmail=Request.headers['email'];
        let FormDate=  Request.body['FormDate']
        let ToDate=  Request.body['ToDate']

        let data=await  PurchasesModel.aggregate([
            {$match: {UserEmail:UserEmail,CreatedDate:{$gte:new Date(FormDate),$lte:new Date(ToDate)}}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$GrandTotal"}
                        }
                    }],
                    Rows:[
                        {$lookup: {from: "suppliers", localField: "SupplierID", foreignField: "_id", as: "suppliers"}}
                    ],
                }
            }
        ])


        return {status: "success", data: data}

    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}
module.exports=PurchasesReportService