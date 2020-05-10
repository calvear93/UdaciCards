/**
 * Redux Action definition.
 *
 * @export
 * @interface IAction
 * @template P payload type.
 */
export interface IAction<P>
{
    readonly key: string;
    readonly type: string;
    readonly payload: P | undefined;
}

/**
 * Redux Action Vault definition.
 *
 * @export
 * @interface IActionVault
 * @template T type definition.
 * @template P payload type.
 * @template S state definition.
 */
export interface IActionVault<T, P, S>
{
    readonly Key: string;
    readonly Type: T;
    readonly State: S | undefined;
    readonly Action: (type: string, payload?: P) => IAction<P>;
}
