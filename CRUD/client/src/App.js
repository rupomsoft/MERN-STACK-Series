import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import ReadPage from "./Pages/ReadPage";
import CreatePage from "./Pages/CreatePage";
import UpdatePage from "./Pages/UpdatePage";
class App extends Component {
  render() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props)=><ReadPage {...props} key={Date.now()} />}/>
                    <Route exact path="/create" render={(props)=><CreatePage {...props} key={Date.now()} />}/>
                    <Route exact path="/update/:id" render={(props)=><UpdatePage {...props} key={Date.now()} />}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
  }
}
export default App;
