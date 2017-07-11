import React from 'react';
import {connect} from 'react-redux';
import LogEntriesList from './LogEntriesList.jsx';
import LogSorter from './LogSorter.jsx';
import SortingTypes from './LogSortingTypes.jsx';
import ActionTypes from '../Main/ActionTypes.jsx';
import axios from 'axios';

class LogReader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="log-reader panel panel-default">
                <LogSorter/>
                <LogEntriesList items={this.state.items}/>
            </section>
        );
    }

    componentWillMount() {
        this.setState({
            items: []
        });
    }

    componentDidMount() {
        this.getNewItems(SortingTypes.SORTING_DEFAULT);
    }

    componentWillUpdate(nextProps) {
        if (this.props.sorting !== nextProps.sorting) {
            this.getNewItems(nextProps.sorting);
        }
    }

    getNewItems(sorting) {
        let options = {
            params: {
                sorting
            }
        };
        axios.get('http://logreader.io/log', options)
            .then(this.itemLoadSuccessHandler.bind(this), this.itemLoadErrorHandler.bind(this));
    }

    /**
     * Handle successful request
     * @param status
     * @param response
     */
    itemLoadSuccessHandler(response) {
        this.setState({ items: response.data });
    }

    itemLoadErrorHandler(response) {
        console.log(response);
    }

}

const mapStateToProps = (state) => {
        return {
            sorting: state.sorting,
            loading: state.loading
        };
    },
    mapDispatchToProps = (dispatch) => {
        return {};
    };

export default connect(mapStateToProps, mapDispatchToProps)(LogReader);



