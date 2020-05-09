import { AnyAction } from 'redux';
import { SampleAction } from '../actions';
import { SampleDefaults } from './defaults';

/**
 * Redux Actions Reducer.
 *
 * @param {any} store current store partition state.
 * @param {IAction<any>} action action dispatched.
 *
 * @returns {any} new store partition.
 */
export default function SampleReducer(store: any = SampleDefaults, action: AnyAction) : any
{
    // action destructuring. (key, type or payload).
    const { type, payload } = action;

    switch (type)
    {
        case SampleAction.Type.RUN:
            return {
                ...store,
                loading: true
            };

        case SampleAction.Type.RUN_SUCCESS:
            return {
                ...store,
                loading: false
            };

        case SampleAction.Type.RUN_FAILED:
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
