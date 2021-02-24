import React, {useState} from "react";
import SignForm from "../sign-form";
import firebase from "firebase";

const SignIn = ({setUser}) => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('')

    const createAccount = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => setUser(email))
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
                  setError={setError}
                  sign={createAccount}
        />
    )
};

export default SignIn;