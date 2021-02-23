import "./header.scss";
import React from "react";
import {NavLink} from "react-router-dom";

const Header = ({user}) => {
    return (
        <div className="header">
            {
                user.length !== 0 ?
                    <p>Hi, {user}</p>
                    :
                    ''
            }
        </div>
    )
};

export default Header;