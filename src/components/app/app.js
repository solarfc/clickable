import "./app.scss";
import React, {useState} from "react";
import Aside from "../aside";
import Main from "../main";

const App = () => {

    const [user, setUser] = useState('');

    return (
        <div className="wrapper">
            <Aside />
            <Main user={user}/>
        </div>
        // aside
        // main
        // <Switch>
        //     <Route exact path="/" render={() => <SignUpPage />}/>
        // </Switch>
    )
};

export default App;