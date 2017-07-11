import React from 'react';

export default class LogEntriesList extends React.Component {


    /**
     * Render table header
     * @returns {Array}
     */
    renderHeader() {
        return (
            <header className="hidden-sm row log-items-header">
                <div className="col-md-2">IP</div>
                <div className="col-md-2">Date</div>
                <div className="col-md-2">Response</div>
                <div className="col-md-6">Request</div>
            </header>
        );
    }


    /**
     * Render table data rows
     * @returns {Array}
     */
    renderRows() {
        let items = [];
        // Iterate over all the entries
        // Using ES6 destructuring feature to get syntax similar to foreach
        for (let [key, item] of this.props.items.entries()) {
            items.push(
                <li key={key} className="list-group-item row">
                    <div className="col-md-2">{item.ip}</div>
                    <div className="col-md-2">{item.date}</div>
                    <div className="col-md-2">{item.response}</div>
                    <div className="col-md-6">{item.request}</div>
                </li>
            );
        }
        return (
            <ul className="list-group">
                {items}
            </ul>
        );
    }


    /**
     * Combine header and rows and return complete table
     * @returns {XML}
     */
    render() {
        return (
            <div className="log-items panel-body">
                {this.renderHeader()}
                {this.renderRows()}
            </div>
        );
    }
}
