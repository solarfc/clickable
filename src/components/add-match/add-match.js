import "./add-match.scss";
import React from "react";
import {MatchForm} from "../pages";
import MatchesDataService from "../../service";

const AddMatch = ({title, sendData}) => {

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
            sendData={createMatch}
        />
    )
};

export default AddMatch;