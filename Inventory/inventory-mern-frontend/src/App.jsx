import React,{Fragment} from 'react';
import {getToken} from "./helper/SessionHelper";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import Page404 from "./pages/NotFound/Page404";
import FullscreenLoader from "./components/MasterLayout/FullscreenLoader";
import LoginPage from "./pages/Users/LoginPage";
import RegistrationPage from "./pages/Users/RegistrationPage";
import SendOTPPage from "./pages/Users/SendOTPPage";
import VerifyOTPPage from "./pages/Users/VerifyOTPPage";
import CreatePasswordPage from "./pages/Users/CreatePasswordPage";
import ProfilePage from "./pages/Users/ProfilePage";
import BrandCreateUpdatePage from "./pages/Brand/BrandCreateUpdatePage";
import BrandListPage from "./pages/Brand/BrandListPage";
import CategoryCreateUpdatePage from "./pages/Category/CategoryCreateUpdatePage";
import CategoryListPage from "./pages/Category/CategoryListPage";
import CustomerCreateUpdatePage from "./pages/Customer/CustomerCreateUpdatePage";
import CustomerListPage from "./pages/Customer/CustomerListPage";
import ExpenseTypeCreateUpdatePage from "./pages/ExpenseType/ExpenseTypeCreateUpdatePage";
import ExpenseListPage from "./pages/Expense/ExpenseListPage";
import ExpenseCreateUpdatePage from "./pages/Expense/ExpenseCreateUpdatePage";
import ProductCreateUpdatePage from "./pages/Product/ProductCreateUpdatePage";
import ProductListPage from "./pages/Product/ProductListPage";
import PurchaseCreateUpdatePage from "./pages/Purchase/PurchaseCreateUpdatePage";
import PurchaseListPage from "./pages/Purchase/PurchaseListPage";
import PurchaseReportPage from "./pages/Report/PurchaseReportPage";
import ReturnReportPage from "./pages/Report/ReturnReportPage";
import SaleReportPage from "./pages/Report/SaleReportPage";
import ExpenseReportPage from "./pages/Report/ExpenseReportPage";
import ReturnCreateUpdatePage from "./pages/Return/ReturnCreateUpdatePage";
import ReturnListPage from "./pages/Return/ReturnListPage";
import SalesCreateUpdatePage from "./pages/Sales/SalesCreateUpdatePage";
import SalesListPage from "./pages/Sales/SalesListPage";
import SupplierCreateUpdatePage from "./pages/Supplier/SupplierCreateUpdatePage";
import SupplierListPage from "./pages/Supplier/SupplierListPage";
import ExpenseTypeList from "./components/ExpenseType/ExpenseTypeList";
import ExpenseTypeListPage from "./pages/ExpenseType/ExpenseTypeListPage";
const App = () => {
    if(getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/BrandCreateUpdatePage" element={<BrandCreateUpdatePage />}/>}/>
                        <Route exact path="/BrandListPage" element={<BrandListPage />}/>}/>

                        <Route exact path="/CategoryCreateUpdatePage" element={<CategoryCreateUpdatePage />}/>}/>
                        <Route exact path="/CategoryListPage" element={<CategoryListPage />}/>}/>

                        <Route exact path="/CustomerCreateUpdatePage" element={<CustomerCreateUpdatePage />}/>}/>
                        <Route exact path="/CustomerListPage" element={<CustomerListPage />}/>}/>

                        <Route exact path="/ExpenseTypeCreateUpdatePage" element={<ExpenseTypeCreateUpdatePage />}/>}/>
                        <Route exact path="/ExpenseTypeListPage" element={<ExpenseTypeListPage />}/>}/>

                        <Route exact path="/ExpenseCreateUpdatePage" element={<ExpenseCreateUpdatePage />}/>}/>
                        <Route exact path="/ExpenseListPage" element={<ExpenseListPage />}/>}/>

                        <Route exact path="/ProductCreateUpdatePage" element={<ProductCreateUpdatePage />}/>}/>
                        <Route exact path="/ProductListPage" element={<ProductListPage />}/>}/>

                        <Route exact path="/PurchaseCreateUpdatePage" element={<PurchaseCreateUpdatePage />}/>}/>
                        <Route exact path="/PurchaseListPage" element={<PurchaseListPage />}/>}/>

                        <Route exact path="/ReturnCreateUpdatePage" element={<ReturnCreateUpdatePage />}/>}/>
                        <Route exact path="/ReturnListPage" element={<ReturnListPage />}/>}/>

                        <Route exact path="/SalesCreateUpdatePage" element={<SalesCreateUpdatePage />}/>}/>
                        <Route exact path="/SalesListPage" element={<SalesListPage />}/>}/>

                        <Route exact path="/SupplierCreateUpdatePage" element={<SupplierCreateUpdatePage />}/>}/>
                        <Route exact path="/SupplierListPage" element={<SupplierListPage />}/>}/>

                        <Route exact path="/PurchaseReportPage" element={<PurchaseReportPage />}/>}/>
                        <Route exact path="/ReturnReportPage" element={<ReturnReportPage />}/>}/>
                        <Route exact path="/SaleReportPage" element={<SaleReportPage />}/>}/>
                        <Route exact path="/ExpenseReportPage" element={<ExpenseReportPage />}/>}/>

                        <Route exact path="/" element={<DashboardPage />}/>}/>
                        <Route exact path="/Profile" element={<ProfilePage/>}/>} />}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Login" replace />}/>
                        <Route exact path="/Login" element={<LoginPage />}/>}  />}/>
                        <Route exact path="/Registration" element={<RegistrationPage />}/>} />}/>
                        <Route exact path="/SendOTP" element={<SendOTPPage/>}/>} />}/>
                        <Route exact path="/VerifyOTP" element={<VerifyOTPPage/>}/>} />}/>
                        <Route exact path="/CreatePassword" element={<CreatePasswordPage/>}/>} />}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );
    }
};
export default App;