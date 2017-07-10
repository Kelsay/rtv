/**
 * Reducer to change the state of filter
 * @param sorting - old sorting
 * @param action - dispatched action with type
 * @constructor
 */

import ActionTypes from './ActionTypes.jsx';

export default function filterReducer(filter, action) {

    if (action.type === ActionTypes.FILTER_CHANGE) {
        return action.filter;
    } else {
        return filter;
    }

};
