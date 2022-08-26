const ExpensesModel = require("../../models/Expenses/ExpensesModel");
const ExpenseSummaryService= async (Request) => {
    try{
        let UserEmail=Request.headers['email'];
        let data=await  ExpensesModel.aggregate([
            {$match: {UserEmail:UserEmail}},
            {
                $facet:{
                    Total:[{
                        $group:{
                            _id:0,
                            TotalAmount:{$sum:"$Amount"}
                        }
                    }],
                    Last30Days:[{
                        $group:{
                            _id: { $dateToString: { format: "%Y-%m-%d", date: "$CreatedDate" }},
                            TotalAmount:{$sum:"$Amount"}
                        }},
                        { $sort: { _id: -1 } },
                        { $limit: 30 }
                    ]
                }
            }
        ])


        return {status: "success", data: data}

    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}
module.exports=ExpenseSummaryService