const ExpensesModel = require("../models/ExpensesModel");

exports.CreateExpenses=async (req, res) => {
    try{
        let data = await  ExpensesModel.create(req.body)
        res.status(200).json({status: "success", data: data})
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}

exports.UpdateExpenses=async (req, res) => {
    try {
        let data = await ExpensesModel.updateOne({_id: req.params.id}, req.body);
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.DeleteExpenses=async (req, res) => {
    try {
        let data = await ExpensesModel.remove({_id: req.params.id});
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.ExpensesList=async (req, res) => {
    try{
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKeyword;
        let skipRow = (pageNo - 1) * perPage;
        let data;
        if (searchValue!=="0") {
            let SearchRgx = {"$regex": searchValue, "$options": "i"}
            let SearchQuery = {$or: [{Amount: SearchRgx},{Note: SearchRgx},{CreatedDate: SearchRgx}]}
            data = await ExpensesModel.aggregate([{
                $facet:{
                    Total:[{$match: SearchQuery},{$count: "count"}],
                    Rows:[{$match: SearchQuery},{$skip: skipRow}, {$limit: perPage}],
                }
            }])
        }
        else {
            data = await ExpensesModel.aggregate([{
                $facet:{
                    Total:[{$count: "count"}],
                    Rows:[{$skip: skipRow}, {$limit: perPage}],
                }
            }])

        }
        res.status(200).json({status: "success",data})

    }
    catch (error) {
        res.status(200).json({status: "fail",error:error})
    }
}

