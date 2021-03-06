const express =require('express');
const UsersController=require("../controllers/UsersController");
const BrandController = require("../controllers/BrandController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const CategoryController = require("../controllers/CategoryController");
const CustomerController = require("../controllers/CustomerController");
const SupplierController=require("../controllers/SupplierController")
const ExpenseTypeController=require("../controllers/ExpenseTypeController")
const ExpenseListController = require("../controllers/ExpenseListController");
const ProductController = require("../controllers/ProductController");
const PurchaseController = require("../controllers/PurchaseController");
const SellController = require("../controllers/SellController");
const ReturnController = require("../controllers/ReturnController");
const DashboardController = require("../controllers/DashboardController");


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



//Customer
router.post("/CreateCustomer",AuthVerifyMiddleware,CustomerController.CreateCustomer);
router.post("/UpdateCustomer/:CustomerID",AuthVerifyMiddleware,CustomerController.UpdateCustomer);
router.get("/DeleteCustomer/:CustomerID",AuthVerifyMiddleware,CustomerController.DeleteCustomer);
router.get("/ReadCustomer",AuthVerifyMiddleware,CustomerController.ReadCustomer);


//Supplier
router.post("/CreateSupplier",AuthVerifyMiddleware,SupplierController.CreateSupplier);
router.post("/UpdateSupplier/:SupplierID",AuthVerifyMiddleware,SupplierController.UpdateSupplier);
router.get("/DeleteSupplier/:SupplierID",AuthVerifyMiddleware,SupplierController.DeleteSupplier);
router.get("/ReadSupplier",AuthVerifyMiddleware,SupplierController.ReadSupplier);


// Expense Type
router.post("/CreateExpenseType",AuthVerifyMiddleware,ExpenseTypeController.CreateExpenseType);
router.post("/UpdateExpenseType/:TypeID",AuthVerifyMiddleware,ExpenseTypeController.UpdateExpenseType);
router.get("/DeleteExpenseType/:TypeID",AuthVerifyMiddleware,ExpenseTypeController.DeleteExpenseType);
router.get("/ReadExpenseType",AuthVerifyMiddleware,ExpenseTypeController.ReadExpenseType);




// Expense List
router.post("/CreateExpenseList",AuthVerifyMiddleware,ExpenseListController.CreateExpenseList);
router.post("/UpdateExpenseList/:ExpenseID",AuthVerifyMiddleware,ExpenseListController.UpdateExpenseList);
router.get("/DeleteExpenseList/:ExpenseID",AuthVerifyMiddleware,ExpenseListController.DeleteExpenseList);
router.get("/ReadExpenseList",AuthVerifyMiddleware,ExpenseListController.ReadExpenseList);


// Product
router.get("/ReadProduct",AuthVerifyMiddleware,ProductController.ReadProduct);
router.get("/DeleteProduct/:ProductID",AuthVerifyMiddleware,ProductController.DeleteProduct);
router.post("/CreateProduct",AuthVerifyMiddleware,ProductController.CreateProduct);
router.post("/UpdateProduct/:ProductID",AuthVerifyMiddleware,ProductController.UpdateProduct);




//Purchase
router.post("/CreatePurchase",AuthVerifyMiddleware,PurchaseController.CreatePurchase);
router.get("/ReadPurchase",AuthVerifyMiddleware,PurchaseController.ReadPurchase);
router.get("/ReadPurchaseProducts/:PurchaseID",AuthVerifyMiddleware,PurchaseController.ReadPurchaseProducts);
router.get("/DeletePurchase/:PurchaseID",AuthVerifyMiddleware,PurchaseController.DeletePurchase);



//Sell
router.post("/CreateSell",AuthVerifyMiddleware,SellController.CreateSell);
router.get("/ReadSell",AuthVerifyMiddleware,SellController.ReadSell);
router.get("/ReadSellProducts/:SellID",AuthVerifyMiddleware,SellController.ReadSellProducts);
router.get("/DeleteSell/:SellID",AuthVerifyMiddleware,SellController.DeleteSell);


//Return
router.post("/CreateReturn",AuthVerifyMiddleware,ReturnController.CreateReturn);
router.get("/ReadReturn",AuthVerifyMiddleware,ReturnController.ReadReturn);
router.get("/ReadReturnProducts/:ReturnID",AuthVerifyMiddleware,ReturnController.ReadReturnProducts);
router.get("/DeleteReturn/:ReturnID",AuthVerifyMiddleware,ReturnController.DeleteReturn);


// Dashboard
router.get("/TotalSell",AuthVerifyMiddleware,DashboardController.TotalSell);
router.get("/TotalPurchase",AuthVerifyMiddleware,DashboardController.TotalPurchase);
router.get("/TotalExpense",AuthVerifyMiddleware,DashboardController.TotalExpense);
router.get("/TotalReturn",AuthVerifyMiddleware,DashboardController.TotalReturn);

module.exports=router;