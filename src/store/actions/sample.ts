import { IAction, CreateAction, CreateActionTypes } from './shared';

// Store partition key.
const KEY = 'SAMPLE';

/**
 * Redux Action container.
 *
 * @export SampleAction
 */
const SampleAction =
{

    /**
     * Action Store Key.
     *
     * @memberof SampleAction
     */
    Key: KEY,

    /**
     * Action Types.
     *
     * @memberof SampleAction
     */
    Types: CreateActionTypes({
        FETCH: 'FETCH',
        FETCH_SUCCESS: 'FETCH_SUCCESS',
        FETCH_ERROR: 'FETCH_ERROR'
    }),

    /**
     * Returns the action.
     *
     * @param {string} type action type.
     * @param {any} payload data involved in the action.
     *
     * @memberof SampleAction
     *
     * @returns {IAction} Action.
     */
    Action: (type: string, payload: any): IAction => CreateAction(SampleAction.Key, type, payload)
};

export default Object.freeze(SampleAction);
