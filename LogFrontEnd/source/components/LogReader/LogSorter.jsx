import React from 'react';
import {connect} from 'react-redux';
import ActionTypes from '../Main/ActionTypes.jsx';
import SortingTypes from  './LogSortingTypes.jsx';

class LogSorter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel-heading log-sorting">
                <span>Sort by: </span>
                {this.createButton('Default', SortingTypes.SORTING_DEFAULT)}
                {this.createButton('IP', SortingTypes.SORTING_IP)}
                {this.createButton('Request', SortingTypes.SORTING_REQUEST)}
                {this.createButton('Response', SortingTypes.SORTING_RESPONSE)}
            </div>
        );
    }

    /**
     * Returns a button with individual click handler and CSS classes
     * @param name button label
     * @param sorting SortingTypes
     * @returns {XML}
     */
    createButton(name, sorting) {
        let className = (sorting === this.props.sorting) ? 'btn-primary' : 'btn-default';
        className += " btn";
        return (
            <button className={className} onClick={this.clickHandler.bind(this, sorting)}>
                {name}
            </button>
        );
    }

    clickHandler(sorting) {
        this.props.changeSorting(sorting);
    }
}

const mapStateToProps = (state) => {
        return {
            sorting: state.sorting
        };
    },
    mapDispatchToProps = (dispatch) => {
        return {
            changeSorting: (sorting) => dispatch({type: ActionTypes.SORTING_CHANGE, sorting: sorting})
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(LogSorter);
