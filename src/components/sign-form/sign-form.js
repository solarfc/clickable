import "./sign-form.scss";
import React from "react";
import {NavLink, useHistory} from "react-router-dom";

const SignForm = ({title, path, error, userName, userPassword, setUserName, setUserPassword, setError, sign}) => {

    const history = useHistory();

    const handleChange = (e, method) => {
        method(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sign(userName, userPassword);
        setError('');
        localStorage.setItem('user', userName);
        history.push('/');
    }

    return (
        <div className="sign-form">
            <form action="" onSubmit={(e) => {handleSubmit(e)}}>
                <h3>{title}</h3>
                <div className="form-group">
                    <input type="email"
                           id="email"
                           className="email"
                           placeholder="Enter your e-mail"
                           required
                           value={userName}
                           onChange={(e) => handleChange(e, setUserName)}
                    />
                </div>
                <div className="form-group">
                    <input type="password"
                           id="password"
                           className="password"
                           placeholder="Enter your password"
                           required
                           value={userPassword}
                           onChange={(e) => handleChange(e, setUserPassword)}
                    />
                </div>
                <p>{error}</p>
                <div className="form-group">
                    <button type="submit">{title}</button>
                </div>
                <NavLink to={path}>{title === 'Sign In' ? 'Sign Up' : "Sign In"}</NavLink>
            </form>
        </div>
    )
};

export default SignForm;