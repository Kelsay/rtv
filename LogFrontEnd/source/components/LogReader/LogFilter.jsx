import React from 'react';
import {connect} from 'react-redux';
import ActionTypes from '../Main/ActionTypes.jsx';

class LogFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    render() {
        return (
            <div className="filters">
                <input type="text" onChange={this.changeHandler}/>
            </div>
        );
    }

    changeHandler(a, b) {
        this.props.changeFilter(a.target.value);
    }
}


const mapStateToProps = (state) => {
        return {
            filter: state
        };
    },
    mapDispatchToProps = (dispatch) => {
        return {
            changeFilter: (filter) => dispatch({type: ActionTypes.FILTER_CHANGE, filter: filter})
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(LogFilter);
