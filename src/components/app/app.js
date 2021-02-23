import "./app.scss";
import React from "react";
import {Route, Switch} from "react-router-dom";
import {SignUpPage} from "../pages";
import Aside from "../aside";
import Main from "../main";

const App = () => {
    return (
        <div className="wrapper">
            <Aside />
            <Main />
        </div>
        // aside
        // main
        // <Switch>
        //     <Route exact path="/" render={() => <SignUpPage />}/>
        // </Switch>
    )
};

export default App;