import "./header.scss";
import React from "react";
import firebase from "firebase";
import {useHistory} from "react-router-dom";

const Header = ({user, setUser}) => {

    const history = useHistory();

    const signOut = () => {
        firebase.auth().signOut()
            .then(res => localStorage.setItem('user', ''))
            .catch(error => console.log(error));
        setUser('');
        history.push('/');
    }

    return (
        <div className="header">
            {
                user.length !== 0 ?
                    <div className="header__panel">
                        <p>Hi, {user.slice(0, user.indexOf('@'))}</p>
                        <button type="submit" onClick={() => signOut()}>Log out</button>
                    </div>
                    :
                    ''
            }
        </div>
    )
};

export default Header;