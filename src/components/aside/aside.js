import "./aside.scss";
import React from "react";
import {NavLink} from "react-router-dom";

const Aside = () => {

    return (
        <aside className="aside">
            <div className="aside__logo">
                <h3>Dashboard Kit</h3>
            </div>
            <div className="aside__menu">
                <menu>
                    <li>
                        <NavLink to="/overview">Overview</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">Matches</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </li>
                </menu>
            </div>
        </aside>
    )
};

export default Aside;