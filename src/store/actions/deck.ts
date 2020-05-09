import { ActionVault } from './shared';

// store partition key.
const KEY = 'DECK';

// defines action types.
interface DeckActionType {
    readonly ADD_DECK: string;
    readonly REMOVE_DECK: string;
    readonly ADD_CARD: string;
    readonly REMOVE_CARD: string;
}

/**
 * Creates action vault containing Redux
 * actions and generic action creator.
 *
 * @export DeckAction
 */
export default new ActionVault<DeckActionType, any>(
    KEY,
    {
        ADD_DECK: 'ADD_DECK',
        REMOVE_DECK: 'REMOVE_DECK',
        ADD_CARD: 'ADD_CARD',
        REMOVE_CARD: 'REMOVE_CARD'
    }
);
