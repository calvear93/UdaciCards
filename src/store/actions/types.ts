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
 */
export interface IActionVault<T, P>
{
    readonly Key: string;
    readonly Type: T;
    readonly Action: (type: string, payload?: P) => IAction<P>;
}
