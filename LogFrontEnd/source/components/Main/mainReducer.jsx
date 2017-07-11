/***
 * A main reducer function combining all state reducers
 * The one reducer to rule the all
 */

import sortingReducer from './sortingReducer.jsx';
import loadingReducer from './loadingReducer.jsx';

export default function mainReducer(state, action) {

    return {
        sorting: sortingReducer(state.sorting, action),
        loading: loadingReducer(state.loading, action)
    };

}
