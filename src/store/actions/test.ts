import { IAction, CreateAction } from './shared';

// store partition key.
const KEY = 'TEST';

// actions types definition.
enum TestActionType {
    RUN,
    RUN_SUCCESS,
    RUN_FAILED
}

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
    Types: TestActionType,

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
    Action: (type: TestActionType, payload: any): IAction<TestActionType, any> => CreateAction(TestAction.Key, type, payload)
};

export default Object.freeze(TestAction);
