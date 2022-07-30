const ParentModel = require("../models/PurchasesModel");
const ChildsModel = require("../models/PurchaseProductsModel");
const CreateParentChildsService = require("../services/common/CreateParentChildsService");

exports.CreatePurchases=async (req, res) => {

    let Result= await CreateParentChildsService(req,ParentModel,ChildsModel);

    res.status(200).json(Result)
}


