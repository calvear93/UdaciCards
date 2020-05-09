import { ActionVault } from './shared';

// store partition key.
const KEY = 'INIT';

// defines action types.
interface InitActionType {
    readonly RUN: string;
    readonly SUCCESS: string;
    readonly FAILED: string;
}

/**
 * Creates action vault containing Redux
 * actions and generic action creator.
 *
 * @export DeckAction
 */
export default new ActionVault<InitActionType, any>(
    KEY,
    {
        RUN: 'RUN',
        SUCCESS: 'SUCCESS',
        FAILED: 'FAILED'
    }
);
