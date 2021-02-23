import "./content.scss";
import React, {useEffect, useState} from "react";
import MatchesDataService from "../../service";
import {NavLink} from "react-router-dom";
import banner from "../../assets/img/logo.png";
import Modal from 'react-awesome-modal';

const Content = () => {
    const [state, setState] = useState([]);
    const matchService = new MatchesDataService();

    useEffect(() => {
        matchService.getAllMatches().on('value', (elem) => setState(elem.val()));
        // matchService.addMatch({home: 'Fulham', away: 'Aston Villa', id: 158, date: '24.02.2021 19:00', league: 'EPL', banner: banner})
    }, []);

    const deleteMatch = (key) => {
        matchService.deleteMatch(key);
    };

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
                            {
                                Object.entries(state).map(item => {
                                    return (
                                        item[1].banner ? <tr key={item[1].id}>
                                            <td>{item[1].league}</td>
                                            <td>{item[1].home} vs {item[1].away}</td>
                                            <td>{item[1].date}</td>
                                            <td><img src={item[1].banner} alt=""/></td>
                                            <td>
                                                <NavLink to={`/${item[1].id}/edit`}>update</NavLink>
                                                <button onClick={() => deleteMatch(item[0])}>delete</button>
                                            </td>
                                        </tr> : ''
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <button>Create new match</button>
                <Modal visible={true} width="400" height="300" effect="fadeInUp" onClickAway={() => {}}>
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <button onClick={() => {}}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
};

export default Content;