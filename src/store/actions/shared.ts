/**
 * Redux Action definition.
 *
 * @export
 * @interface IAction
 * @template T
 */
export interface IAction<T, P>
{
    key: string,
    type: T;
    payload: P;
}

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
export function CreateAction<T, P>(key: string, type: T, payload: P): IAction<T, P>
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
