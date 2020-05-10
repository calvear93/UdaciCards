import uuid from 'short-uuid';
import { IAction, IActionVault } from './types';

/**
 * Creates a new Redux Action.
 *
 * @export
 * @param {string} key action store pointer.
 * @param {T} type action Type.
 * @param {P} payload action args.
 *
 * @returns {IAction} action.
 */
export function CreateAction<P>(key: string, type: string, payload?: P): IAction<P>
{
    return {
        key,
        type,
        payload
    };
}

/**
 * Creates Redux Action Type from
 * object using GUID.
 *
 * @export
 * @param {any} obj dictionary with actions types for declare.
 *
 * @returns {any} frozen object for Redux Action Types.
 */
export function CreateActionTypes(obj: any): any
{
    let types = {};

    for (const key of obj)
        types[key] = `${obj[key]}:${uuid.uuid()}`;

    return types;
}

/**
 * Makes object properties of an object
 * unique, appending a uuid ot it.
 *
 * @export
 * @param {any} obj dictionary with actions types for declare.
 *
 * @returns {any} object with unique properties.
 */
export function MakeUnique(obj: any): any
{
    for (const key of Object.keys(obj))
        obj[key] = `${key}:${uuid.uuid()}`;

    return obj;
}

/**
 * Redux Action container.
 *
 * @export ActionVault
 */
export class ActionVault<T, P, S = undefined> implements IActionVault<T, P, S>
{
    /**
     * Creates an instance of ActionVault.
     *
     * @param {string} key action store partition key.
     * @param {T} type action types.
     * @param {S} state action states.
     *
     * @memberof ActionVault
     */
    constructor(key: string, type: T, state?: S)
    {
        this.Key = key;
        this.State = state;
        this.Type = MakeUnique(type);
    }

    /**
     * Action store partition Key.
     *
     * @memberof ActionVault
     */
    Key: string;

    /**
     * Action types.
     *
     * @memberof ActionVault
     */
    Type: T;

    /**
     * Action states.
     *
     * @memberof ActionVault
     */
    State: S | undefined;

    /**
     * Returns the action.
     *
     * @param {string} type action type.
     * @param {any} payload data involved in the action.
     *
     * @memberof ActionVault
     *
     * @returns {IAction} action function.
     */
    Action: (type: string, payload?: P) => IAction<P> = (type: string, payload?: P): IAction<P> => CreateAction(this.Key, type, payload);
}
