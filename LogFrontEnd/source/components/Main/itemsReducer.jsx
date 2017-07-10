/**
 * Reducer to change the state of items loaded
 * @param sorting - old items
 * @param action - dispatched action with type
 * @constructor
 */

import ActionTypes from './ActionTypes.jsx';

export default function itemsReducer(items, action) {

    if (action.type === ActionTypes.ITEMS_CHANGED) {
        return action.items;
    } else {
        return items;
    }

};
