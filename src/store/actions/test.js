import { createAction, createActionTypes, createActionTypesUnique } from './shared';

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
    Types: createActionTypesUnique({
        FETCH: 'FETCH',
        FETCH_SUCCESS: 'FETCH_SUCCESS',
        FETCH_ERROR: 'FETCH_ERROR'
    }),

    /**
     * Storage type for persist data.
     *
     * @memberof TestAction
     */
    StorageType: 'localStorage',

    /**
     * Keys for persisted data.
     *
     * @memberof TestAction
     */
    StorageKeys: createActionTypes(KEY, {
        DATA: 'DATA'
    }),

    /**
     * Returns the action.
     *
     * @param {Symbol} type Action type.
     * @param {any} payload Data involved in the action.
     * @memberof MasterDataAction
     * @returns {func} Action.
     */
    Action: (type, payload) => createAction(TestAction.Key, type, payload)
};

export default Object.freeze(TestAction);
