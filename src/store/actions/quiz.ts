import { ActionVault } from './shared';

// store partition key.
const KEY = 'QUIZ';

// defines action types.
interface QuizActionType {
    readonly START: string;
    readonly ANSWER: string;
}

/**
 * Creates action vault containing Redux
 * actions and generic action creator.
 *
 * @export DeckAction
 */
export default new ActionVault<QuizActionType, any>(
    // partition key.
    KEY,
    // dispatch action types.
    {
        START: 'START',
        ANSWER: 'ANSWER'
    },
);
