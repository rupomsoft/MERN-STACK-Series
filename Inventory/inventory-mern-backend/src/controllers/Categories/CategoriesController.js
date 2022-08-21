const DataModel = require("../../models/Categories/CategoriesModel");
const ProductsModel = require("../../models/Products/ProductsModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const DeleteService = require("../../services/common/DeleteService");
const mongoose = require("mongoose");

exports.CreateCategories=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.UpdateCategories=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}


exports.CategoriesList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}


exports.CategoriesDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}

exports.DeleteCategories=async (req, res) => {
    let DeleteID=req.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    let CheckAssociate= await CheckAssociateService({CategoryID:ObjectId(DeleteID)},ProductsModel);
    if(CheckAssociate){
        res.status(200).json({status: "associate", data: "Associate with Product"})
    }
    else{
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}



