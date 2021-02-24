import React, {useEffect, useState} from "react";
import MatchesDataService from "../../service";
import MatchForm from "../pages/match-form";
import {withRouter} from "react-router-dom";

const UpdateMatch = ({match: {params: {id}}}) => {

    const [state, setState] = useState([]);
    const matchService = new MatchesDataService();
    useEffect(() => {
        matchService.matchInfo(id).once('value', (elem) => setState(elem.val()));
    }, []);

    const updateData = (value) => {
        matchService.updateMatch(id, value);
    }

    if(state.length === 0) {
        return <></>
    }

    return <MatchForm title="Update Match"
                      home={state.home}
                      away={state.away}
                      league={state.league}
                      date={state.date}
                      time={state.time}
                      banner={state.banner}
                      sendData={updateData}
    />
};

export default withRouter(UpdateMatch);