import { all, put, takeLatest, delay } from 'redux-saga/effects';
import { DeckAction } from '../actions';
import uuid from 'short-uuid';

function* addDeck({ payload: { title } }: any)
{
    try
    {
        yield delay(200);

        const newDeck = {
            id: uuid.uuid(),
            title
        };

        yield put(DeckAction.Action(
            DeckAction.Type.ADD_DECK_COMMIT,
            newDeck
        ));
    }
    catch (e)
    {
        yield put(DeckAction.Action(
            DeckAction.Type.ADD_DECK_FAILED,
            {
                error: e,
                message: 'The operation cannot be completed'
            }
        ));
    }
}

function* addCard({ payload }: any)
{
    const newCard = {
        id: uuid.uuid(),
        ...payload
    };

    yield put(DeckAction.Action(
        DeckAction.Type.ADD_CARD_COMMIT,
        newCard
    ));
}

/**
 * Exports saga listeners.
 *
 * @export
 */
export default function* run()
{
    yield all([
        takeLatest(DeckAction.Type.ADD_DECK, addDeck),
        takeLatest(DeckAction.Type.ADD_CARD, addCard)
    ]);
}
