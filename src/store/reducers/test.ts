import { TestAction } from '../actions';
import { TestDefaults } from './defaults';

/**
 * Redux Actions Reducer.
 *
 * @param {any} store current store partition state.
 * @param {any} action action dispatched.
 * @returns {any} new store partition.
 */
function TestReducer(store = TestDefaults, action)
{
    // action destructuring. (key, type or payload).
    const { type, payload } = action;

    switch (type)
    {
        case TestAction.Types.RUN:
            return {
                ...store,
                loading: true
            };

        case TestAction.Types.RUN_SUCCESS:
            return {
                ...store,
                loading: false
            };

        case TestAction.Types.RUN_FAILED:
            return {
                ...store,
                loading: false
            };

        // default doesn't changes the store,
        // so, components doesn't re-renders.
        default:
            return store;
    }
}

export default TestReducer;
