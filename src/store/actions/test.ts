import { CreateAction, CreateActionTypes } from './shared';

// Store partition key.
const KEY = 'TEST';

/**
 * Redux Action container.
 *
 * @export TestAction
 */
const TestAction =
{

    /**
     * Action Store Key.
     *
     * @memberof TestAction
     */
    Key: KEY,

    /**
     * Action Types.
     *
     * @memberof TestAction
     */
    Types: CreateActionTypes({
        FETCH: 'FETCH',
        FETCH_SUCCESS: 'FETCH_SUCCESS',
        FETCH_ERROR: 'FETCH_ERROR'
    }),

    /**
     * Returns the action.
     *
     * @param {Symbol} type Action type.
     * @param {any} payload Data involved in the action.
     * @memberof MasterDataAction
     * @returns {func} Action.
     */
    Action: (type, payload) => CreateAction(TestAction.Key, type, payload)
};

export default Object.freeze(TestAction);
