import "./content.scss";
import React, {useEffect, useState} from "react";
import MatchesDataService from "../../service";
import {NavLink} from "react-router-dom";

const Content = () => {

    const matchService = new MatchesDataService();
    const [state, setState] = useState([]);


    useEffect(() => {
        matchService.getAllMatches().on('value', (elem) => setState(elem.val()));
    }, []);

    const deleteMatch = (key) => {
        matchService.deleteMatch(key);
    };

    const content = Object.entries(state).map(([key, value]) => {
        return (
            value.banner ? <tr key={value.id}>
                <td>{value.league}</td>
                <td>{value.home} vs {value.away}</td>
                <td>{value.date} at {value.time}</td>
                <td><img src={value.banner} alt=""/></td>
                <td>
                    <NavLink to={`/edit-match/${key}`}>Update</NavLink>
                    <button onClick={() => deleteMatch(key)}>delete</button>
                </td>
            </tr> : ''
        )
    });

    return (
        <div className="content">
            <div className="content__block">
                <h3>All matches</h3>
                <div className="content__block-title">
                    <table style={{width: '100%'}}>
                        <thead>
                            <tr>
                                <th>League</th>
                                <th>Teams</th>
                                <th>Date</th>
                                <th>Banner</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                </div>
                <NavLink to="/create-match">Create new match</NavLink>
            </div>
        </div>
    )
};

export default Content;