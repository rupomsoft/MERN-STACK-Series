const express =require('express');
const AuthVerifyMiddleware=require("../middlewares/AuthVerifyMiddleware");
const UsersController=require("../controllers/Users/UsersController");
const BrandsController=require("../controllers/Brands/BrandsController");
const CategoriesController = require("../controllers/Categories/CategoriesController");
const CustomersController = require("../controllers/Customers/CustomersController");
const SuppliersController = require("../controllers/Suppliers/SuppliersController");
const ExpenseTypesController = require("../controllers/Expenses/ExpenseTypesController");
const ExpensesController = require("../controllers/Expenses/ExpensesController");
const ProductsController = require("../controllers/Products/ProductsController");
const PurchasesController = require("../controllers/Purchases/PurchasesController");
const SalesController = require("../controllers/Sales/SalesController");
const ReturnsController = require("../controllers/Returns/ReturnsController");
const ReportController = require("../controllers/Report/ReportController");
const SummaryController = require("../controllers/Summary/SummaryController");

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
router.get("/DeleteBrand/:id",AuthVerifyMiddleware,BrandsController.DeleteBrand);

// Categories
router.post("/CreateCategories",AuthVerifyMiddleware,CategoriesController.CreateCategories);
router.post("/UpdateCategories/:id",AuthVerifyMiddleware,CategoriesController.UpdateCategories);
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesController.CategoriesList);
router.get("/CategoriesDropDown",AuthVerifyMiddleware,CategoriesController.CategoriesDropDown);
router.get("/DeleteCategories/:id",AuthVerifyMiddleware,CategoriesController.DeleteCategories);


// Customers
router.post("/CreateCustomers",AuthVerifyMiddleware,CustomersController.CreateCustomers);
router.post("/UpdateCustomers/:id",AuthVerifyMiddleware,CustomersController.UpdateCustomers);
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersController.CustomersList);
router.get("/CustomersDropDown",AuthVerifyMiddleware,CustomersController.CustomersDropDown);
router.get("/DeleteCustomer/:id",AuthVerifyMiddleware,CustomersController.DeleteCustomer);


// Suppliers
router.post("/CreateSuppliers",AuthVerifyMiddleware,SuppliersController.CreateSuppliers);
router.post("/UpdateSuppliers/:id",AuthVerifyMiddleware,SuppliersController.UpdateSuppliers);
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SuppliersController.SuppliersList);
router.get("/SuppliersDropDown",AuthVerifyMiddleware,SuppliersController.SuppliersDropDown);
router.get("/DeleteSupplier/:id",AuthVerifyMiddleware,SuppliersController.DeleteSupplier);

// ExpenseTypes
router.post("/CreateExpenseTypes",AuthVerifyMiddleware,ExpenseTypesController.CreateExpenseTypes);
router.post("/UpdateExpenseTypes/:id",AuthVerifyMiddleware,ExpenseTypesController.UpdateExpenseTypes);
router.get("/ExpenseTypesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpenseTypesController.ExpenseTypesList);
router.get("/ExpenseTypesDropDown",AuthVerifyMiddleware,ExpenseTypesController.ExpenseTypesDropDown);
router.get("/DeleteExpenseTypes/:id",AuthVerifyMiddleware,ExpenseTypesController.DeleteExpenseTypes);



// Expenses
router.post("/CreateExpenses",AuthVerifyMiddleware,ExpensesController.CreateExpenses);
router.post("/UpdateExpenses/:id",AuthVerifyMiddleware,ExpensesController.UpdateExpenses);
router.get("/ExpensesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpensesController.ExpensesList);
router.get("/DeleteExpense/:id",AuthVerifyMiddleware,ExpensesController.DeleteExpense);


// Products
router.post("/CreateProducts",AuthVerifyMiddleware,ProductsController.CreateProducts);
router.post("/UpdateProducts/:id",AuthVerifyMiddleware,ProductsController.UpdateProducts);
router.get("/ProductsList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ProductsController.ProductsList);
router.get("/DeleteProduct/:id",AuthVerifyMiddleware,ProductsController.DeleteProduct);


//Purchases
router.post("/CreatePurchases",AuthVerifyMiddleware,PurchasesController.CreatePurchases);
router.get("/PurchasesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,PurchasesController.PurchasesList);
router.get("/PurchasesDelete/:id",AuthVerifyMiddleware,PurchasesController.PurchasesDelete);


//Sales
router.post("/CreateSales",AuthVerifyMiddleware,SalesController.CreateSales);
router.get("/SalesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SalesController.SalesList);
router.get("/SaleDelete/:id",AuthVerifyMiddleware,SalesController.SaleDelete);


//Return
router.post("/CreateReturns",AuthVerifyMiddleware,ReturnsController.CreateReturns);
router.get("/ReturnsList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ReturnsController.ReturnsList);
router.get("/ReturnDelete/:id",AuthVerifyMiddleware,ReturnsController.ReturnDelete);

//Report
router.post("/ExpensesByDate",AuthVerifyMiddleware,ReportController.ExpensesByDate);
router.post("/ReturnByDate",AuthVerifyMiddleware,ReportController.ReturnByDate);
router.post("/PurchaseByDate",AuthVerifyMiddleware,ReportController.PurchaseByDate);
router.post("/SalesByDate",AuthVerifyMiddleware,ReportController.SalesByDate);

//Report
router.get("/ExpensesSummary",AuthVerifyMiddleware,SummaryController.ExpensesSummary);
router.get("/ReturnSummary",AuthVerifyMiddleware,SummaryController.ReturnSummary);
router.get("/PurchaseSummary",AuthVerifyMiddleware,SummaryController.PurchaseSummary);
router.get("/SalesSummary",AuthVerifyMiddleware,SummaryController.SalesSummary);


module.exports=router;






































module.exports=router;