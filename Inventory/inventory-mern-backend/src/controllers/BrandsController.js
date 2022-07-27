const BrandsModel = require("../models/BrandsModel");
const CreateService = require("../services/common/CreateService");

exports.CreateBrand=async (req, res) => {

    let Result= await CreateService(req.body, req.headers['email'], BrandsModel)
    res.status(200).json(Result)

}

exports.UpdateBrand=async (req, res) => {
    try {
        let UserEmail=req.headers['email'];
        let id=req.params.id;
        let reqBody=req.body;
        let data = await BrandsModel.updateOne({_id:id,UserEmail:UserEmail},reqBody);
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}


exports.DeleteBrand=async (req, res) => {
    try {
        let UserEmail=req.headers['email'];
        let id=req.params.id;
        let data = await BrandsModel.remove({_id:id,UserEmail:UserEmail});
        res.status(200).json({status: "success", data: data})
    } catch (e) {
        res.status(200).json({status: "fail", data: e})
    }
}

exports.BrandList=async (req, res) => {
    try{
        let UserEmail=req.headers['email'];
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKeyword;
        let skipRow = (pageNo - 1) * perPage;
        let data;
        if (searchValue!=="0") {
            let SearchRgx = {"$regex": searchValue, "$options": "i"}
            let SearchQuery = {$or: [{Name: SearchRgx}],$and:[{UserEmail:UserEmail}]}
            data = await BrandsModel.aggregate([{
                $facet:{
                    Total:[{$match: SearchQuery},{$count: "count"}],
                    Rows:[{$match: SearchQuery},{$skip: skipRow}, {$limit: perPage}],
                }
            }])
        }
        else {
            data = await BrandsModel.aggregate([{
                $facet:{
                    Total:[{$match: {UserEmail:UserEmail}},{$count: "count"}],
                    Rows:[{$match: {UserEmail:UserEmail}},{$skip: skipRow}, {$limit: perPage}],
                }
            }])

        }
        res.status(200).json({status: "success",data})

    }
    catch (error) {
        res.status(200).json({status: "fail",error:error})
    }
}


exports.BrandDropDown=async (req, res) => {
    try{
        let UserEmail=req.headers['email'];
        let data = await BrandsModel.aggregate([
            {$match: {UserEmail:UserEmail}},
            {$project:{_id:1,Name:1} }
        ])
        res.status(200).json({status: "success",data})
    }
    catch (error) {
        res.status(200).json({status: "fail",error:error})
    }
}


