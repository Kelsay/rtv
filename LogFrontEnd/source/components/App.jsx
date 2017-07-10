/**
 * Main application, entry point and initialization of the components
 */

import React from 'react';
import LogReader from "./LogReader/LogReader.jsx";


export default class App extends React.Component {

    render() {
        return (
            <div className="container main-container">
                <h1>Log Reader</h1>
                <LogReader/>
            </div>
        );
    }

}
