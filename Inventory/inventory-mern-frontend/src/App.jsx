import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/Dashboard/Dashboard-Page";
import ProfilePage from "./pages/Users/Profile-Page";
import LoginPage from "./pages/Users/Login-Page";
import RegistrationPage from "./pages/Users/Registration-Page";
import Page404 from "./pages/NotFound/Page-404";
import FullscreenLoader from "./components/MasterLayout/Fullscreen-Loader";
import {getToken} from "./helper/SessionHelper";
import SendOTPPage from "./pages/Users/Send-OTP-Page";
import VerifyOTPPage from "./pages/Users/Verify-OTP-Page";
import CreatePasswordPage from "./pages/Users/Create-Password-Page";

const App = () => {

    if(getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<DashboardPage  />}  />}/>
                        <Route exact path="/Profile" element={<ProfilePage />}/>}  />}/>
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