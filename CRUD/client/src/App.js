import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import HomePage from "./Pages/HomePage";
class App extends Component {
  render() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
  }
}
export default App;
