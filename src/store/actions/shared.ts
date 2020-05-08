// import { v1 as guid } from 'react-native-uuid';

/**
 * Redux Action definition.
 *
 * @export
 * @interface IAction
 * @template T
 */
export interface IAction
{
    key: string,
    type: string;
    payload: any;
}

/**
 * Creates a new Redux Action.
 *
 * @export
 * @param {string} key action store pointer.
 * @param {string} type action Type.
 * @param {any} payload action args.
 *
 * @returns {IAction} action.
 */
export function CreateAction(key: string, type: string, payload: any): IAction
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

    for (const key in obj)
        types[key] = `${obj[key]}:${'guid()'}`; // Symbol(obj[key]);

    return Object.freeze(types);
}
