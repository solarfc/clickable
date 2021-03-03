import "./add-match.scss";
import React, {useState} from "react";
import {MatchForm} from "../pages";
import MatchesDataService from "../../service";

const AddMatch = () => {

    const [error, setError] = useState('');
    const [res, setRes] = useState('');

    const matchService = new MatchesDataService();

    const createMatch = (info) => {
        matchService.addMatch(info)
            .then(res => setRes('Match added successfully. You will be redirected to the home page'))
            .catch(error => setError('An error occurred while adding'));
    };

    return (
        <MatchForm title="Create Match"
                   home=""
                   away=""
                   league=""
                   date=""
                   time=""
                   banner=""
                   homesTeamValid={false}
                   awaysTeamValid={false}
                   leaguesValid={false}
                   dateValid={false}
                   res={res}
                   error={error}
                   sendData={createMatch}
        />
    )
};

export default AddMatch;