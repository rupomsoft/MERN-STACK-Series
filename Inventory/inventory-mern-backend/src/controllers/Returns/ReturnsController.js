const ParentModel = require("../../models/Returns/ReturnsModel");
const ChildsModel = require("../../models/Returns/ReturnProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");

exports.CreateReturns=async (req, res) => {
    let Result= await CreateParentChildsService(req,ParentModel,ChildsModel);
    res.status(200).json(Result)
}


