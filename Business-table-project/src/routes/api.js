const express =require('express');
const ProductsController=require("../controllers/ProductsController")
const router =express.Router();


router.get("/ProductList/:pageNo/:perPage/:searchKey?",ProductsController.ProductList);



module.exports=router;