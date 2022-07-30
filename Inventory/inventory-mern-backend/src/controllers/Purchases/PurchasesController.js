const ParentModel = require("../../models/Purchases/PurchasesModel");
const ChildsModel = require("../../models/Purchases/PurchaseProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");

exports.CreatePurchases=async (req, res) => {

    let Result= await CreateParentChildsService(req,ParentModel,ChildsModel);

    res.status(200).json(Result)
}


