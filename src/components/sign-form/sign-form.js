import "./sign-form.scss";
import React, {useState} from "react";

const SignForm = ({title}) => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleChange = (e, method) => {
        method(e.target.value);
    };

    return (
        <div className="sign-form">
            <form action="">
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
                <div className="form-group">
                    <button type="submit">{title}</button>
                </div>
            </form>
        </div>
    )
};

export default SignForm;