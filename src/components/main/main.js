import "./main.scss";
import React from "react";
import {Route, Switch} from "react-router-dom";
import Content from "../content";
import Header from "../header";

const Main = ({user}) => {

    return (
        <main className="main">
            <Header user={user}/>
            <Switch>
                <Route path="/overview" render={() => {}} />
                <Route exact path="/" render={() => <Content />} />
                <Route path="/contacts" render={() => {}} />
            </Switch>
        </main>
    )
};

export default Main;