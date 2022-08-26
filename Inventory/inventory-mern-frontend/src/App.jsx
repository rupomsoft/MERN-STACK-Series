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
const App = () => {
    if(getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
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