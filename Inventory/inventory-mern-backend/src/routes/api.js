const express =require('express');
const UsersController=require("../controllers/UsersController");
const BrandsController=require("../controllers/BrandsController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const CategoriesController = require("../controllers/CategoriesController");
const CustomersController = require("../controllers/CustomersController");
const SuppliersController = require("../controllers/SuppliersController");
const ExpenseTypesController = require("../controllers/ExpenseTypesController");


const router =express.Router();

// User Profile
router.post("/Registration",UsersController.Registration);
router.post("/Login",UsersController.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);


// Brands
router.post("/CreateBrand",BrandsController.CreateBrand);
router.post("/UpdateBrand/:id",BrandsController.UpdateBrand);
router.get("/DeleteBrand/:id",BrandsController.DeleteBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",BrandsController.BrandList);


// Categories
router.post("/CreateCategories",CategoriesController.CreateCategories);
router.post("/UpdateCategories/:id",CategoriesController.UpdateCategories);
router.get("/DeleteCategories/:id",CategoriesController.DeleteCategories);
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword",CategoriesController.CategoriesList);



// Customers
router.post("/CreateCustomers",CustomersController.CreateCustomers);
router.post("/UpdateCustomers/:id",CustomersController.UpdateCustomers);
router.get("/DeleteCustomers/:id",CustomersController.DeleteCustomers);
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword",CustomersController.CustomersList);



// Suppliers
router.post("/CreateSuppliers",SuppliersController.CreateSuppliers);
router.post("/UpdateSuppliers/:id",SuppliersController.UpdateSuppliers);
router.get("/DeleteSuppliers/:id",SuppliersController.DeleteSuppliers);
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword",SuppliersController.SuppliersList);


// ExpenseTypes
router.post("/CreateExpenseTypes",ExpenseTypesController.CreateExpenseTypes);
router.post("/UpdateExpenseTypes/:id",ExpenseTypesController.UpdateExpenseTypes);
router.get("/DeleteExpenseTypes/:id",ExpenseTypesController.DeleteExpenseTypes);
router.get("/ExpenseTypesList/:pageNo/:perPage/:searchKeyword",ExpenseTypesController.ExpenseTypesList);


module.exports=router;






































module.exports=router;