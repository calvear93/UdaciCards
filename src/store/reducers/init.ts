import { AnyAction } from 'redux';
import { InitAction } from '../actions';
import { InitDefaults } from './defaults';

/**
 * Redux Actions Reducer.
 *
 * @param {any} store current store partition state.
 * @param {AnyAction} action action dispatched.
 *
 * @returns {any} new store partition.
 */
export default function InitReducer(store: any = InitDefaults, action: AnyAction ) : any
{
    // action destructuring. (key, type or payload).
    const { type, payload } = action;

    switch (type)
    {
        case InitAction.Type.RUN:
            return {
                ...store,
                loading: true
            };

        case InitAction.Type.SUCCESS:
            return {
                ...store,
                ready: true,
                loading: false
            };

        case InitAction.Type.FAILED:
            return {
                ...store,
                ready: false,
                loading: false
            };

        // default doesn't changes the store,
        // so, components doesn't re-renders.
        default:
            return store;
    }
}
