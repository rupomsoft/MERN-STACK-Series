const express =require('express');
const UsersController=require("../controllers/UsersController");
const BrandsController=require("../controllers/BrandsController");
const AuthVerifyMiddleware=require("../middlewares/AuthVerifyMiddleware");
const CategoriesController = require("../controllers/CategoriesController");
const CustomersController = require("../controllers/CustomersController");
const SuppliersController = require("../controllers/SuppliersController");
const ExpenseTypesController = require("../controllers/ExpenseTypesController");
const ExpensesController = require("../controllers/ExpensesController");
const ProductsController = require("../controllers/ProductsController");

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
router.post("/CreateBrand",AuthVerifyMiddleware,BrandsController.CreateBrand);
router.post("/UpdateBrand/:id",AuthVerifyMiddleware,BrandsController.UpdateBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandsController.BrandList);
router.get("/BrandDropDown",AuthVerifyMiddleware,BrandsController.BrandDropDown);

// Categories
router.post("/CreateCategories",AuthVerifyMiddleware,CategoriesController.CreateCategories);
router.post("/UpdateCategories/:id",AuthVerifyMiddleware,CategoriesController.UpdateCategories);
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesController.CategoriesList);
router.get("/CategoriesDropDown",AuthVerifyMiddleware,CategoriesController.CategoriesDropDown);


// Customers
router.post("/CreateCustomers",AuthVerifyMiddleware,CustomersController.CreateCustomers);
router.post("/UpdateCustomers/:id",AuthVerifyMiddleware,CustomersController.UpdateCustomers);
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersController.CustomersList);
router.get("/CustomersDropDown",AuthVerifyMiddleware,CustomersController.CustomersDropDown);


// Suppliers
router.post("/CreateSuppliers",AuthVerifyMiddleware,SuppliersController.CreateSuppliers);
router.post("/UpdateSuppliers/:id",AuthVerifyMiddleware,SuppliersController.UpdateSuppliers);
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SuppliersController.SuppliersList);
router.get("/SuppliersDropDown",AuthVerifyMiddleware,SuppliersController.SuppliersDropDown);


// ExpenseTypes
router.post("/CreateExpenseTypes",AuthVerifyMiddleware,ExpenseTypesController.CreateExpenseTypes);
router.post("/UpdateExpenseTypes/:id",AuthVerifyMiddleware,ExpenseTypesController.UpdateExpenseTypes);
router.get("/ExpenseTypesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpenseTypesController.ExpenseTypesList);
router.get("/ExpenseTypesDropDown",AuthVerifyMiddleware,ExpenseTypesController.ExpenseTypesDropDown);



// Expenses
router.post("/CreateExpenses",AuthVerifyMiddleware,ExpensesController.CreateExpenses);
router.post("/UpdateExpenses/:id",AuthVerifyMiddleware,ExpensesController.UpdateExpenses);
router.get("/ExpensesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpensesController.ExpensesList);


// Products
router.post("/CreateProducts",AuthVerifyMiddleware,ProductsController.CreateProducts);
router.post("/UpdateProducts/:id",AuthVerifyMiddleware,ProductsController.UpdateProducts);
router.get("/ProductsList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ProductsController.ProductsList);





module.exports=router;






































module.exports=router;