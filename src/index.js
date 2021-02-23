import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ErrorBoundry from "./components/error-boundry";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundry>
            <Router>
                <App/>
            </Router>
        </ErrorBoundry>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();