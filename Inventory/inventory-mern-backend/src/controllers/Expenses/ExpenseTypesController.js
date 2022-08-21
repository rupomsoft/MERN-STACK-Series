const DataModel = require("../../models/Expenses/ExpenseTypesModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const mongoose = require("mongoose");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const ExpensesModel = require("../../models/Expenses/ExpensesModel");
const DeleteService = require("../../services/common/DeleteService");

exports.CreateExpenseTypes=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.UpdateExpenseTypes=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.ExpenseTypesList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}

exports.ExpenseTypesDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}


exports.DeleteExpenseTypes=async (req, res) => {
    let DeleteID=req.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    let CheckAssociate= await CheckAssociateService({TypeID:ObjectId(DeleteID)},ExpensesModel);
    if(CheckAssociate){
        res.status(200).json({status: "associate", data: "Associate with Expenses"})
    }
    else{
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}

