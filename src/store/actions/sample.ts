import { CreateAction, IAction } from './shared';

// store partition key.
const KEY = 'SAMPLE';

// actions types definition.
enum ActionType {
    RUN,
    RUN_SUCCESS,
    RUN_FAILED
}

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
    Action: (type: ActionType, payload: any): IAction<ActionType, any> => CreateAction(SampleAction.Key, type, payload)
};

export default Object.freeze(SampleAction);
