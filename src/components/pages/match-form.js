import React, {useState} from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import 'moment/locale/ru';

const MatchForm = ({title, home, away, league, date, time, banner, sendData}) => {

    console.log(home);

    const [homeTeam, setHomeTeam] = useState(home);
    const [awayTeam, setAwayTeam] = useState(away);
    const [leagues, setLeague] = useState(league);
    const [dates, setDate] = useState(date);
    const [times, setTime] = useState(time);
    const [banners, setBanner] = useState(banner);

    const disable = homeTeam.length <= 2 || awayTeam.length <= 2 || leagues.length <= 1 || dates.length === 0 || times.length === 0;

    const handleChange = (e, method) => {
        method(e.target.value);
    };

    const dateTransform = (value) => {
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
            setBanner(e.target.result);
        }
        reader.readAsDataURL(input.target.files[0]);
    };

    const onSendData = (e) => {
        e.preventDefault();
        sendData({id: Math.floor(Math.random() * 15000 - 254), home: homeTeam, away: awayTeam, league: leagues, date: dates, time: times, banner: banners});
    };

    return (
        <form className="add-match" action="" onSubmit={(e) => onSendData(e)}>
            <h2>{title}</h2>
            <div className="form-group">
                <input type="text"
                       id="home"
                       name="home"
                       placeholder="Home team"
                       value={homeTeam}
                       onChange={(e) => handleChange(e, setHomeTeam)}
                />
            </div>
            <div className="form-group">
                <input type="text"
                       id="away"
                       name="away"
                       placeholder="Away team"
                       value={awayTeam}
                       onChange={(e) => handleChange(e, setAwayTeam)}
                />
            </div>
            <div className="form-group">
                <input type="text"
                       id="league"
                       name="league"
                       placeholder="League"
                       value={leagues}
                       onChange={(e) => handleChange(e, setLeague)}
                />
            </div>
            <p>Select date and time</p>
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
        </form>
    )

};

export default MatchForm;