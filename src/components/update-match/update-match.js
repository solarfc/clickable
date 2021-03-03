import React, {useEffect, useState} from "react";
import MatchesDataService from "../../service";
import MatchForm from "../pages/match-form";
import {withRouter} from "react-router-dom";

const UpdateMatch = ({match: {params: {id}}}) => {

    const [error, setError] = useState('');
    const [res, setRes] = useState('');
    const [state, setState] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const matchService = new MatchesDataService();

    useEffect(() => {
        matchService.matchInfo(id).once('value', (elem) => setState(elem.val()));
    }, [id]);

    const updateData = (value) => {
        matchService.updateMatch(id, value)
            .then(res => setRes('Match successfully changed. You will be redirected to the home page'))
            .catch(error => setError('An error occurred while adding'));
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
                      homesTeamValid={true}
                      awaysTeamValid={true}
                      leaguesValid={true}
                      dateValid={true}
                      res={res}
                      error={error}
                      sendData={updateData}
    />
};

export default withRouter(UpdateMatch);