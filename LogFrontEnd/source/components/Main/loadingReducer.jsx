/**
 * Reducer to change the state of sorting
 * @param sorting
 * @param action
 * @constructor
 */

import ActionTypes from './ActionTypes.jsx';

export default function loadingReducer(loading, action) {

    switch (action.type) {
        case ActionTypes.LOADING_START:
            return true;
        case ActionTypes.LOADING_DONE:
            return false;
        default:
            return loading;
    }

};
