import { AnyAction } from 'redux';
import { DeckAction } from '../actions';
import { DeckDefaults } from './defaults';
import deck from '../actions/deck';

/**
 * Redux Actions Reducer.
 *
 * @param {any} store current store partition state.
 * @param {AnyAction} action action dispatched.
 *
 * @returns {any} new store partition.
 */
export default function DeckReducer(store: any = DeckDefaults, action: AnyAction ) : any
{
    // action destructuring. (key, type or payload).
    const { type, payload } = action;

    switch (type)
    {
        case DeckAction.Type.ADD_DECK:
            delete store.error;

            return {
                ...store,
                loading: true
            };

        case DeckAction.Type.ADD_DECK_COMMIT:
        {
            const { id, title } = payload;
            const { decks = {} } = store;

            return {
                ...store,
                loading: false,
                count: store.count + 1,
                decks: {
                    ...decks,
                    [id]: {
                        id,
                        title,
                        count: 0,
                        questions: {}
                    }
                }
            };
        }

        case DeckAction.Type.ADD_DECK_FAILED:
        {
            const { error } = payload;

            return {
                ...store,
                loading: false,
                error
            };
        }

        case DeckAction.Type.REMOVE_DECK:
        {
            const { id } = payload;
            const { decks } = store;

            delete decks[id];

            return {
                ...store,
                count: store.count - 1,
                decks: {
                    ...decks
                }
            };
        }

        case DeckAction.Type.ADD_CARD:
            return store;

        case DeckAction.Type.REMOVE_CARD:
            return store;

        case DeckAction.Type.CLEAR:
            return {
                count: 0
            };

        // default doesn't changes the store,
        // so, components doesn't re-renders.
        default:
            return store;
    }
}
