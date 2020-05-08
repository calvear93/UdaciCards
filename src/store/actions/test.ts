import { IAction, CreateAction, MakeUnique } from './shared';

// store partition key.
const KEY = 'TEST';

// action types definition.
const ActionType = {
    RUN: 'RUN',
    RUN_SUCCESS: 'RUN_SUCCESS',
    RUN_FAILED: 'RUN_FAILED'
};

// makes action types unique.
MakeUnique(ActionType);

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
    Types: ActionType,

    /**
     * Returns the action.
     *
     * @param {string} type action type.
     * @param {any} payload data involved in the action.
     *
     * @memberof TestAction
     *
     * @returns {IAction} Action.
     */
    Action: (type: any, payload: any): IAction<any, any> => CreateAction(TestAction.Key, type, payload)
};

export default Object.freeze(TestAction);
