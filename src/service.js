import firebase from "./firebase";

const db = firebase.database().ref('/matches');

export default class MatchesDataService {
    getAllMatches() {
        return db;
    };
    addMatch(info) {
        return db.push(info);
    };
    updateMatch(key, value) {
        return db.child(key).update(value)
            .then(res => console.log(res));
    };
    deleteMatch(key) {
        return db.child(key).remove();
    };
    matchInfo(key) {
        return db.child(key);
    };
};



