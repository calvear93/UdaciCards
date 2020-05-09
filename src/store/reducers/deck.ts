import { AnyAction } from 'redux';
import { DeckAction } from '../actions';
import { DeckDefaults } from './defaults';

/**
 * Redux Actions Reducer.
 *
 * @param {any} store current store partition state.
 * @param {IAction<any>} action action dispatched.
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
        {
            const { id, title, description } = payload;

            return {
                ...store,
                [id]: {
                    title,
                    description,
                    questions: []
                }
            };
        }

        case DeckAction.Type.REMOVE_DECK:
        {
            const { id } = payload;

            delete store[id];

            return {
                ...store
            };
        }

        case DeckAction.Type.ADD_CARD:
            return store;

        case DeckAction.Type.REMOVE_CARD:
            return store;

        // default doesn't changes the store,
        // so, components doesn't re-renders.
        default:
            return store;
    }
}
