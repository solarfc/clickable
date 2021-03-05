import React, {useState} from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import 'moment/locale/ru';
import {useHistory} from "react-router-dom";

const MatchForm = ({title, home, away, league, date, time, banner, homesTeamValid, awaysTeamValid, leaguesValid, dateValid, res, error, sendData}) => {
    let history = useHistory();

    const [homeTeam, setHomeTeam] = useState(home);
    const [awayTeam, setAwayTeam] = useState(away);
    const [leagues, setLeague] = useState(league);
    const [dates, setDate] = useState(date);
    const [times, setTime] = useState(time);
    const [banners, setBanner] = useState(banner);
    const [homeError, setHomeError] = useState('');
    const [awayError, setAwayError] = useState('');
    const [leagueError, setLeagueError] = useState('');
    const [datesError, setDatesError] = useState('');
    const [homeTeamValid, setHomeTeamValid] = useState(homesTeamValid);
    const [awayTeamValid, setAwayTeamValid] = useState(awaysTeamValid);
    const [leagueValid, setLeagueValid] = useState(leaguesValid);
    const [datesValid, setDatesValid] = useState(dateValid);

    let disable = !(homeTeamValid && awayTeamValid && leagueValid && datesValid);
    const regex = /^([A-Z]{1})([A-Za-z 0-9]{2,15})$/;

    const handleChange = (e, method) => {
        method(e.target.value);
        validateFields(e.target.name, e.target.value);
    };

    const dateTransform = (value) => {
        validateFields('dates', value)
        const day = value.getDate() > 9 ? value.getDate() : `0${value.getDate()}`;
        const month = value.getMonth() + 1 > 9 ? value.getMonth() + 1 : `0${value.getMonth() + 1}`;
        const year = value.getFullYear();
        const hours = value.getHours() > 9 ? value.getHours() : `0${value.getHours()}`;
        const minutes = value.getMinutes() > 9 ? value.getMinutes() : `0${value.getMinutes()}`
        setDate(`${day}.${month}.${year}`);
        setTime(`${hours}:${minutes}`);
    };

    const readURL = (input) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log(e);
            setBanner(e.target.result);
        }
        reader.readAsDataURL(input.target.files[0]);
    };

    const onSendData = (e) => {
        e.preventDefault();
        if(homeTeamValid && awayTeamValid && leagueValid && datesValid) {
            sendData({id: Math.floor(Math.random() * 15000 - 254), home: homeTeam, away: awayTeam, league: leagues, date: dates, time: times, banner: banners})
        }
    };

    if(res.length > 0) {
        disable = true;
        setTimeout(() => {
            history.push('/');
        }, 1000);
    }

    const validateFields = (fieldName, value) => {
        switch (fieldName) {
            case 'home':
                if(!value.match(regex)) {
                    setHomeError('Team name must be at least 3 characters long and start with an uppercase letter. But no more than 15');
                    setHomeTeamValid(false);
                } else if(value === awayTeam) {
                    setHomeError('Home and away teams cannot have the same name');
                    setHomeTeamValid(false);
                } else {
                    setHomeError('');
                    setHomeTeamValid(true);
                }
                break;
            case 'away':
                if(!value.match(regex)) {
                    setAwayError('Team name must be at least 3 characters long and start with an uppercase letter. But no more than 15');
                    setAwayTeamValid(false);
                } else if(value === homeTeam) {
                    setAwayError('Home and away teams cannot have the same name');
                    setAwayTeamValid(false);
                } else {
                    setAwayError('');
                    setAwayTeamValid(true);
                }
                break;
            case 'league':
                if(!value.match(regex)) {
                    setLeagueError('League name must be at least 3 characters long and start with an uppercase letter. But no more than 15');
                    setLeagueValid(false);
                } else {
                    setLeagueError('');
                    setLeagueValid(true);
                }
                break;
            case 'dates':
                if(new Date(value) <= new Date()) {
                    setDatesError('The date and time of the match must be greater than the current time');
                    setDatesValid(false);
                } else {
                    setDatesError('');
                    setDatesValid(true);
                }
                break;
            default:
                break;
        }
    };

    const onCancel = () => {
        history.push('/')
    };

    return (
        <form className="add-match" action="" onSubmit={(e) => onSendData(e)}>
            <h2>{title}</h2>
            <h3>{res ? res : error}</h3>
            <div className="form-group">
                <p style={{color: 'tomato'}}>{homeError}</p>
                <input type="text"
                       id="home"
                       name="home"
                       placeholder="Home team"
                       value={homeTeam}
                       style={homeError.length > 0 ? {border: '1px solid tomato'} : {border: '1px solid #000'}}
                       onChange={(e) => handleChange(e, setHomeTeam)}
                />
            </div>
            <div className="form-group">
                <p style={{color: 'tomato'}}>{awayError}</p>
                <input type="text"
                       id="away"
                       name="away"
                       placeholder="Away team"
                       value={awayTeam}
                       style={awayError.length > 0 ? {border: '1px solid tomato'} : {border: '1px solid #000'}}
                       onChange={(e) => handleChange(e, setAwayTeam)}
                />
            </div>
            <div className="form-group">
                <p style={{color: 'tomato'}}>{leagueError}</p>
                <input type="text"
                       id="league"
                       name="league"
                       placeholder="League"
                       value={leagues}
                       style={leagueError.length > 0 ? {border: '1px solid tomato'} : {border: '1px solid #000'}}
                       onChange={(e) => handleChange(e, setLeague)}
                />
            </div>
            <p>Select date and time</p>
            <p style={{color: 'tomato'}}>{datesError}</p>
            <Datetime local="ru"
                      placeholder=""
                      id="date"
                      readonly={true}
                      initialValue={`${dates} ${times}`}
                      onChange={(e) => dateTransform(e['_d'])}
            />
            <p>If you do not select a banner, your match will not be displayed</p>
            <div className="form-group">
                <input type="file"
                       id="file"
                       name="file"
                       accept="image/*"
                       onChange={(e) => readURL(e)}
                />
            </div>
            <div className="form-group">
                <button disabled={disable} type="submit">Add</button>
            </div>
            <div className="form-group">
                <button onClick={() => onCancel()}>Cancel</button>
            </div>
        </form>
    )

};

export default MatchForm;