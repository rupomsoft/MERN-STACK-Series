const ExpenseTypesModel = require("../models/ExpenseTypesModel");
const CategoriesModel = require("../models/CategoriesModel");

exports.CreateExpenseTypes=async (req, res) => {
    try{
        let data = await  ExpenseTypesModel.create(req.body)
        res.status(200).json({status: "success", data: data})
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}

exports.UpdateExpenseTypes=async (req, res) => {
    try {
        let data = await ExpenseTypesModel.updateOne({_id: req.params.id}, req.body);
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.DeleteExpenseTypes=async (req, res) => {
    try {
        let data = await ExpenseTypesModel.remove({_id: req.params.id});
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.ExpenseTypesList=async (req, res) => {
    try{
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKeyword;
        let skipRow = (pageNo - 1) * perPage;
        let data;
        if (searchValue!=="0") {
            let SearchRgx = {"$regex": searchValue, "$options": "i"}
            let SearchQuery = {$or: [{Name: SearchRgx}]}
            data = await ExpenseTypesModel.aggregate([{
                $facet:{
                    Total:[{$match: SearchQuery},{$count: "count"}],
                    Rows:[{$match: SearchQuery},{$skip: skipRow}, {$limit: perPage}],
                }
            }])
        }
        else {
            data = await ExpenseTypesModel.aggregate([{
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

exports.ExpenseTypesDropDown=async (req, res) => {
    try{
        let data = await ExpenseTypesModel.aggregate([
            {$match:{}},
            {$project:{_id:1,Name:1} }
        ])
        res.status(200).json({status: "success",data})
    }
    catch (error) {
        res.status(200).json({status: "fail",error:error})
    }
}


