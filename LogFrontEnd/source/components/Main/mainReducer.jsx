/***
 * A main reducer function combining all state reducers
 * The one reducer to rule the all
 */

import itemsReducer from './itemsReducer.jsx';
import filterReducer from './filterReducer.jsx';
import sortingReducer from './sortingReducer.jsx';

export default function mainReducer(state, action) {

    return {
        items: itemsReducer(state.items, action),
        filter: filterReducer(state.filter, action),
        sorting: sortingReducer(state.sorting, action)
    };

}
