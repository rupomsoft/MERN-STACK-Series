const SalesModel = require("../../models/Sales/SalesModel");
const SalesReportService= async (Request) => {
    try{

        let UserEmail=Request.headers['email'];
        let FormDate=  Request.body['FormDate']
        let ToDate=  Request.body['ToDate']

        let data=await SalesModel.aggregate([
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
                        {$lookup: {from: "customers", localField: "CustomerID", foreignField: "_id", as: "customers"}}
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
module.exports=SalesReportService