const ParentModel = require("../../models/Purchases/PurchasesModel");
const ChildsModel = require("../../models/Purchases/PurchaseProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");
const ListOneJoinService = require("../../services/common/ListOneJoinService");
const DeleteParentChildsService = require("../../services/common/DeleteParentChildsService");


exports.CreatePurchases=async (req, res) => {
    let Result= await CreateParentChildsService(req,ParentModel,ChildsModel,'PurchaseID');
    res.status(200).json(Result)
}

exports.PurchasesList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "suppliers", localField: "SupplierID", foreignField: "_id", as: "suppliers"}};
    let SearchArray=[{Note: SearchRgx},{'suppliers.Name': SearchRgx},{'suppliers.Address': SearchRgx},{'suppliers.Phone': SearchRgx},{'suppliers.Email': SearchRgx}]
    let Result=await ListOneJoinService(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}

exports.PurchasesDelete=async (req, res) => {
    let Result=DeleteParentChildsService(req,ParentModel,ChildsModel,'PurchaseID')
    res.status(200).json(Result)
}


