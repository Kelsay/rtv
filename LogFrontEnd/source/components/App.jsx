/**
 * Main application, entry point and initialization of the components
 */

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import DefaultState from './Main/DefaultState.jsx';
import mainReducer from './Main/mainReducer.jsx';

import LogReader from "./LogReader/Log.jsx";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.store = createStore(mainReducer, DefaultState);
    }

    render() {
        return (
            <div className="container main-container">
                <Provider store={this.store}>
                    <div>
                        <h1>Log Entries</h1>
                        <LogReader/>
                    </div>
                </Provider>
            </div>
        );
    }

}
