const express =require('express');
const UsersController=require("../controllers/UsersController");
const BrandController = require("../controllers/BrandController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const CategoryController = require("../controllers/CategoryController");

const router =express.Router();


router.post("/UserLogin",UsersController.UserLogin)
// Users
router.post("/CreateUser",AuthVerifyMiddleware,UsersController.CreateUser)
router.post("/UpdateUser/:UserID",AuthVerifyMiddleware,UsersController.UpdateUser)
router.get("/ReadUser",AuthVerifyMiddleware,UsersController.ReadUser)
router.get("/DeleteUser/:UserID",AuthVerifyMiddleware,UsersController.DeleteUser)


//Brands
router.post("/CreateBrandType",AuthVerifyMiddleware,BrandController.CreateBrandType);
router.post("/UpdateBrandType/:BrandID",AuthVerifyMiddleware,BrandController.UpdateBrandType);
router.get("/DeleteBrandType/:BrandID",AuthVerifyMiddleware,BrandController.DeleteBrandType);
router.get("/ReadBrandType",AuthVerifyMiddleware,BrandController.ReadBrandType);


//Categories
router.post("/CreateCategoryType",AuthVerifyMiddleware,CategoryController.CreateCategoryType);
router.post("/UpdateCategoryType/:CategoryID",AuthVerifyMiddleware,CategoryController.UpdateCategoryType);
router.get("/DeleteCategoryType/:CategoryID",AuthVerifyMiddleware,CategoryController.DeleteCategoryType);
router.get("/ReadCategoryType",AuthVerifyMiddleware,CategoryController.ReadCategoryType);




















module.exports=router;