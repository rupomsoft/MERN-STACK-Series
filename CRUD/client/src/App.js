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
                    <Route exact path="/" component={ReadPage}/>
                    <Route exact path="/create" component={CreatePage}/>
                    <Route exact path="/update" component={UpdatePage}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
  }
}
export default App;
