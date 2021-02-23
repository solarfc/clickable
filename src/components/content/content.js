import "./content.scss";
import React, {useEffect, useState} from "react";
import MatchesDataService from "../../service";

const Content = () => {
    const [state, setState] = useState([]);
    const matchService = new MatchesDataService();

    useEffect(() => {
        matchService.getAllMatches().on('value', (elem) => setState(elem.val()));
    }, []);

    return (
        <div className="content">
            <div className="content__block">
                <h3>All matches</h3>
                {
                    state.length !== 0 ? Object.values(state).map(item => item.map(i => {
                        {
                            return (
                                <p>{i.label} <span>{i.id}</span></p>
                            )
                        }
                    })) : ''
                }
            </div>
        </div>
    )
};

export default Content;