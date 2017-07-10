import React from 'react';
import LogEntriesList from './LogEntriesList.jsx';
import ActionTypes from '../Main/ActionTypes.jsx';

export default class LogReader extends React.Component {

    render() {
        return (
            <div>
                Reader
            </div>
        );
    }

    onSortingChanged(a, b) {
        console.log('sorting changed');
    }
}


