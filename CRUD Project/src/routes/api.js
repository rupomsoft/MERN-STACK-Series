const express =require('express');
const ProductsController=require("../controllers/ProductsController")
const router =express.Router();


// C=Create
router.post("/CreateProduct",ProductsController.CreateProduct);


// R=Read
router.get("/ReadProduct",ProductsController.ReadProduct);
router.get("/ReadProductByID/:id",ProductsController.ReadProductByID);



// U=Update
router.post("/UpdateProduct/:id",ProductsController.UpdateProduct);


// Delete
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct);



module.exports=router;