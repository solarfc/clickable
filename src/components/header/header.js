import "./header.scss";
import React from "react";

const Header = ({user}) => {

    return (
        <div className="header">
            {
                user.length !== 0 ?
                    <p>Hi, {user.slice(0, user.indexOf('@'))}</p>
                    :
                    ''
            }
        </div>
    )
};

export default Header;