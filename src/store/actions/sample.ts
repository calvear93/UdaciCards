import { CreateAction, IAction, MakeUnique } from './shared';

// store partition key.
const KEY = 'SAMPLE';

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
    Types: ActionType,

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
    Action: (type: any, payload: any): IAction<any, any> => CreateAction(SampleAction.Key, type, payload)
};

export default Object.freeze(SampleAction);
