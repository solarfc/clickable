import "./app.scss";
import React, {useState} from "react";
import Aside from "../aside";
import Main from "../main";
import {Route, Switch} from "react-router-dom";
import {SignIn, SignUpPage} from "../pages";

const App = () => {


    const [user, setUser] = useState('');

    return (
        user.length === 0 ?
            <Switch>
                <Route exact path="/" render={() => <SignIn setUser={setUser}/>}/>
                <Route exact path="/sign-up" render={() => <SignUpPage user={user} setUser={setUser}/>}/>
            </Switch>
            :
            <div className="wrapper">
                <Aside />
                <Main user={user}/>
            </div>
    );
};

export default App;