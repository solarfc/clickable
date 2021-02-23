import firebase from "./firebase";

const db = firebase.ref('/matches');

export default class MatchesDataService {
    getAllMatches() {
        return db;
    };
    addMatch(info) {
        return db.push(info);
    };
    deleteMatch(key) {
        return db.child(key).remove();
    }
};



