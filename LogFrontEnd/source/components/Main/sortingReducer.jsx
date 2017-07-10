/**
 * Reducer to change the state of sorting
 * @param sorting
 * @param action
 * @constructor
 */

import ActionTypes from './ActionTypes.jsx';

export default function sortingReducer(sorting, action) {

    if (action.type === ActionTypes.SORTING_CHANGE) {
        return action.sorting;
    } else {
        return sorting;
    }

};
