import React from 'react';
import {connect} from 'react-redux';
import LogEntriesList from './LogEntriesList.jsx';
import LogFilter from './LogFilter.jsx';
import ActionTypes from '../Main/ActionTypes.jsx';

class LogReader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Reader
                <LogFilter/>
                <LogEntriesList/>
                {this.props.filter}
            </div>
        );
    }

    onSortingChanged(a, b) {
        console.log('sorting changed');
    }
}

const mapStateToProps = (state) => {
        return {
            filter: state.filter
        };
    },
    mapDispatchToProps = (dispatch) => {
        return {};
    };

export default connect(mapStateToProps, mapDispatchToProps)(LogReader);



