import "./add-match.scss";
import React from "react";
import {MatchForm} from "../pages";
import MatchesDataService from "../../service";

const AddMatch = () => {

    const matchService = new MatchesDataService();
    const createMatch = (info) => {
        matchService.addMatch(info);
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
                   sendData={createMatch}
        />
    )
};

export default AddMatch;