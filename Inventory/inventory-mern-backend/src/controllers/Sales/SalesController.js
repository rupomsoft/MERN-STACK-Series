const ParentModel = require("../../models/Sales/SalesModel");
const ChildsModel = require("../../models/Sales/SaleProductsModel");
const CreateParentChildsService = require("../../services/common/CreateParentChildsService");

exports.CreateSales=async (req, res) => {
    let Result= await CreateParentChildsService(req,ParentModel,ChildsModel);
    res.status(200).json(Result)
}
