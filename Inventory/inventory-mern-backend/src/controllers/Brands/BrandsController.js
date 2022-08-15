const DataModel = require("../../models/Brands/BrandsModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");

exports.CreateBrand=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.UpdateBrand=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.BrandList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}


exports.BrandDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}


