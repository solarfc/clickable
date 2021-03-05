import "./app.scss";
import React, {useEffect, useState} from "react";
import Aside from "../aside";
import Main from "../main";
import {Route, Switch} from "react-router-dom";
import {SignIn, SignUpPage} from "../pages";
import firebase from "firebase";

const App = () => {

    const [user, setUser] = useState('');

    useEffect(() => {
        let isLog = localStorage.getItem('user');
        if(isLog === null) {
            localStorage.setItem('user', user);
        }
        setUser(localStorage.getItem('user'));
        console.log(firebase.auth().currentUser);
    }, []);

    return (
        user.length === 0 ?
            <>
                <Switch>
                    <Route exact path="/" render={() => <SignIn setUser={setUser}/>}/>
                    <Route exact path="/sign-up" render={() => <SignUpPage setUser={setUser}/>} />
                </Switch>
            </>
            :
            <div className="wrapper">
                <Aside />
                <Main user={user} setUser={setUser}/>
            </div>
    );
};

export default App;