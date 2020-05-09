import { ActionVault } from './shared';

// store partition key.
const KEY = 'SAMPLE';

// defines action types.
interface ActionType {
    readonly RUN: string;
    readonly RUN_SUCCESS: string;
    readonly RUN_FAILED: string;
}

/**
 * Creates action vault containing Redux
 * actions and generic action creator.
 *
 * @export SampleAction
 */
export default new ActionVault<ActionType, any>(
    KEY,
    {
        RUN: 'RUN',
        RUN_SUCCESS: 'RUN_SUCCESS',
        RUN_FAILED: 'RUN_FAILED'
    }
);
