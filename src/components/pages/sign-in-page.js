import React, {useState} from "react";
import SignForm from "../sign-form";
import firebase from "firebase";
import {useHistory} from "react-router-dom";

const SignIn = ({setUser}) => {

    const history = useHistory();

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');

    const signInAccount = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(email);
                setError('');
                localStorage.setItem('user', userName);
                history.push('/');
            })
            .catch(error => setError(error.message));
    };

    return (
        <SignForm title="Sign In"
                  path="/sign-up"
                  error={error}
                  userName={userName}
                  userPassword={userPassword}
                  setUserName={setUserName}
                  setUserPassword={setUserPassword}
                  sign={signInAccount}
        />
    )
};

export default SignIn;