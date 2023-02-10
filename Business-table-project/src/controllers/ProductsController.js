const ProductsModel=require('../models/ProductsModel');

exports.ProductList=async (req, res) => {
    let pageNo = Number(req.params.pageNo);
    let perPage = Number(req.params.perPage);
    let searchValue = req.params.searchKey;
    const skipRow = (pageNo - 1) * perPage;
    let Rows;
    let Total;
    if (searchValue!=="0") {
        let SearchRgx = {"$regex": searchValue, "$options": "i"}
        let SearchQuery = {$or: [{title: SearchRgx}]}

        Total = (await ProductsModel.aggregate([{$match: SearchQuery}, {$count: "total"}]))[0]['total']
        Rows = await ProductsModel.aggregate([{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}])
    } else {
        Total = (await ProductsModel.aggregate([{$count: "total"}]))[0]['total']
        Rows = await ProductsModel.aggregate([{$skip: skipRow}, {$limit: perPage}])
    }
    res.status(200).json({status: "success", total: Total, data: Rows})
}

