const SuppliersModel = require("../models/SuppliersModel");

exports.CreateSuppliers=async (req, res) => {
    try{
        let data = await  SuppliersModel.create(req.body)
        res.status(200).json({status: "success", data: data})
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}

exports.UpdateSuppliers=async (req, res) => {
    try {
        let data = await SuppliersModel.updateOne({_id: req.params.id}, req.body);
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.DeleteSuppliers=async (req, res) => {
    try {
        let data = await SuppliersModel.remove({_id: req.params.id});
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.SuppliersList=async (req, res) => {
    try{
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKeyword;
        let skipRow = (pageNo - 1) * perPage;
        let data;
        if (searchValue!=="0") {
            let SearchRgx = {"$regex": searchValue, "$options": "i"}
            let SearchQuery = {$or: [{Name: SearchRgx},{Address: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx}]}
            data = await SuppliersModel.aggregate([{
                $facet:{
                    Total:[{$match: SearchQuery},{$count: "count"}],
                    Rows:[{$match: SearchQuery},{$skip: skipRow}, {$limit: perPage}],
                }
            }])
        }
        else {
            data = await SuppliersModel.aggregate([{
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


