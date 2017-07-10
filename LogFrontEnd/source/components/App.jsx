/**
 * Main application, entry point and initialization of the components
 */

import React from 'react';
import {createStore} from 'redux';
import DefaultState from './Main/DefaultState.jsx';
import mainReducer from './Main/mainReducer.jsx';

import LogReader from "./LogReader/LogReader.jsx";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        createStore(mainReducer, DefaultState);
    }

    render() {
        return (
            <div className="container main-container">
                <h1>Log Reader</h1>
                <LogReader/>
            </div>
        );
    }

}
