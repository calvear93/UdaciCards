import { ActionVault } from './shared';

// store partition key.
const KEY = 'DECK';

// defines action types.
interface DeckActionType {
    readonly ADD_DECK: string;
    readonly ADD_DECK_COMMIT: string;
    readonly ADD_DECK_FAILED: string;
    readonly REMOVE_DECK: string;
    readonly ADD_CARD: string;
    readonly ADD_CARD_COMMIT: string;
    readonly REMOVE_CARD: string;
    readonly CLEAR: string;
}

// defines store states.
interface DeckStoreState {
    readonly LOADING: string;
    readonly READY: string;
    readonly ERROR: string;
}

/**
 * Creates action vault containing Redux
 * actions and generic action creator.
 *
 * @export DeckAction
 */
export default new ActionVault<DeckActionType, any, DeckStoreState>(
    // partition key.
    KEY,
    // dispatch action types.
    {
        ADD_DECK: 'ADD_DECK',
        ADD_DECK_COMMIT: 'ADD_DECK_COMMIT',
        ADD_DECK_FAILED: 'ADD_DECK_FAILED',
        REMOVE_DECK: 'REMOVE_DECK',
        ADD_CARD: 'ADD_CARD',
        ADD_CARD_COMMIT: 'ADD_CARD',
        REMOVE_CARD: 'REMOVE_CARD',
        CLEAR: 'CLEAR'
    },
    // store states.
    {
        LOADING: 'LOADING',
        READY: 'READY',
        ERROR: 'ERROR'
    }
);
