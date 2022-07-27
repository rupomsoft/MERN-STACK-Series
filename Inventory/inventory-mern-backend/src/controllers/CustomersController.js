const CustomersModel = require("../models/CustomersModel");
const CategoriesModel = require("../models/CategoriesModel");

exports.CreateCustomers=async (req, res) => {
    try{
        let data = await  CustomersModel.create(req.body)
        res.status(200).json({status: "success", data: data})
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}

exports.UpdateCustomers=async (req, res) => {
    try {
        let data = await CustomersModel.updateOne({_id: req.params.id}, req.body);
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.DeleteCustomers=async (req, res) => {
    try {
        let data = await CustomersModel.remove({_id: req.params.id});
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.CustomersList=async (req, res) => {
    try{
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKeyword;
        let skipRow = (pageNo - 1) * perPage;
        let data;
        if (searchValue!=="0") {
            let SearchRgx = {"$regex": searchValue, "$options": "i"}
            let SearchQuery = {$or: [{CustomerName: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]}
            data = await CustomersModel.aggregate([{
                $facet:{
                    Total:[{$match: SearchQuery},{$count: "count"}],
                    Rows:[{$match: SearchQuery},{$skip: skipRow}, {$limit: perPage}],
                }
            }])
        }
        else {
            data = await CustomersModel.aggregate([{
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


exports.CustomersDropDown=async (req, res) => {
    try{
        let data = await CustomersModel.aggregate([
            {$match:{}},
            {$project:{_id:1,CustomerName:1} }
        ])
        res.status(200).json({status: "success",data})
    }
    catch (error) {
        res.status(200).json({status: "fail",error:error})
    }
}
