import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import CreatePage from "./pages/CreatePage";
import NewTaskPage from "./pages/NewTaskPage";
import ProgressPage from "./pages/ProgressPage";
import CompletedPage from "./pages/CompletedPage";
import CanceledPage from "./pages/CanceledPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <DashboardPage {...props} key={Date.now()} />}/>
                    <Route exact path="/Create" render={(props) => <CreatePage {...props} key={Date.now()} />}/>
                    <Route exact path="/All" render={(props) => <NewTaskPage {...props} key={Date.now()} />}/>
                    <Route exact path="/Progress" render={(props) => <ProgressPage {...props} key={Date.now()} />}/>
                    <Route exact path="/Completed" render={(props) => <CompletedPage {...props} key={Date.now()} />}/>
                    <Route exact path="/Canceled" render={(props) => <CanceledPage {...props} key={Date.now()} />}/>
                    <Route exact path="/Profile" render={(props) => <ProfilePage {...props} key={Date.now()} />}/>
                    <Route exact path="/Login" render={(props) => <LoginPage {...props} key={Date.now()} />}/>
                    <Route exact path="/Registration" render={(props) => <RegistrationPage {...props} key={Date.now()} />}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
};
export default App;
