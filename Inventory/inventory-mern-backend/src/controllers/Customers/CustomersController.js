const DataModel = require("../../models/Customers/CustomersModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const ListService = require("../../services/common/ListService");
const DropDownService = require("../../services/common/DropDownService");
const mongoose = require("mongoose");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const SalesModel = require("../../models/Sales/SalesModel");
const DeleteService = require("../../services/common/DeleteService");

exports.CreateCustomers=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.UpdateCustomers=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.CustomersList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{CustomerName: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}

exports.CustomersDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,CustomerName:1})
    res.status(200).json(Result)
}


exports.DeleteCustomer=async (req, res) => {
    let DeleteID=req.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    let CheckAssociate= await CheckAssociateService({CustomerID:ObjectId(DeleteID)},SalesModel);
    if(CheckAssociate){
        res.status(200).json({status: "associate", data: "Associate with Sales"})
    }
    else{
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}



